import fs from 'fs';
import path from 'path';

export type ChangelogGroup = {
  label: string;
  items: string[];
};

export type ChangelogRelease = {
  version: string;
  date: string;
  groups: ChangelogGroup[];
};

const RELEASE_HEADING = /^##\s+\[(\d+\.\d+\.\d+)\]\s+-\s+(\d{4}-\d{2}-\d{2})\s*$/;
const GROUP_HEADING = /^###\s+(.+?)\s*$/;
const LIST_ITEM = /^-\s+(.*\S)\s*$/;

/**
 * Parses a Keep a Changelog style document into structured releases.
 * Anything before the first release heading (title, preamble) is ignored.
 */
export const parseChangelog = (markdown: string): ChangelogRelease[] => {
  const releases: ChangelogRelease[] = [];
  let release: ChangelogRelease | undefined;
  let group: ChangelogGroup | undefined;

  for (const line of markdown.split('\n')) {
    const releaseMatch = line.match(RELEASE_HEADING);
    if (releaseMatch) {
      release = { version: releaseMatch[1], date: releaseMatch[2], groups: [] };
      group = undefined;
      releases.push(release);
      continue;
    }

    if (!release) continue;

    const groupMatch = line.match(GROUP_HEADING);
    if (groupMatch) {
      group = { label: groupMatch[1], items: [] };
      release.groups.push(group);
      continue;
    }

    const itemMatch = line.match(LIST_ITEM);
    if (itemMatch && group) {
      group.items.push(itemMatch[1]);
    }
  }

  return releases;
};

export type InlineSegment = {
  text: string;
  code: boolean;
};

/**
 * Splits a changelog item into plain and `inline code` segments so the page can
 * render backticked text as code rather than printing the backticks.
 */
export const splitInlineCode = (text: string): InlineSegment[] =>
  text
    .split(/`([^`]+)`/g)
    .map((part, idx) => ({ text: part, code: idx % 2 === 1 }))
    .filter((segment) => segment.text.length > 0);

/**
 * Reads CHANGELOG.md from the repository root. Server-side only.
 */
export const getChangelog = (): ChangelogRelease[] => {
  const filePath = path.join(process.cwd(), 'CHANGELOG.md');
  return parseChangelog(fs.readFileSync(filePath, 'utf8'));
};
