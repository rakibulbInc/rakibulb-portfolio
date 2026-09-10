import { describe, it, expect } from 'vitest';
import { parseChangelog, getChangelog, splitInlineCode } from '../changelog';

const SAMPLE = `# Changelog

Some preamble that should be ignored.

## [1.0.0] - 2026-09-10

### Added

- A shiny new thing.
- Another thing.

### Removed

- An old thing.

## [0.6.0] - 2026-08-03

### Fixed

- A bug.
`;

describe('parseChangelog', () => {
  it('parses every release in order', () => {
    const releases = parseChangelog(SAMPLE);

    expect(releases).toHaveLength(2);
    expect(releases[0].version).toBe('1.0.0');
    expect(releases[0].date).toBe('2026-09-10');
    expect(releases[1].version).toBe('0.6.0');
    expect(releases[1].date).toBe('2026-08-03');
  });

  it('groups items under their change type', () => {
    const [latest] = parseChangelog(SAMPLE);

    expect(latest.groups).toHaveLength(2);
    expect(latest.groups[0].label).toBe('Added');
    expect(latest.groups[0].items).toEqual(['A shiny new thing.', 'Another thing.']);
    expect(latest.groups[1].label).toBe('Removed');
    expect(latest.groups[1].items).toEqual(['An old thing.']);
  });

  it('ignores content before the first release heading', () => {
    const releases = parseChangelog(SAMPLE);

    const allItems = releases.flatMap((r) => r.groups.flatMap((g) => g.items));
    expect(allItems).not.toContain('Some preamble that should be ignored.');
  });

  it('returns an empty list for markdown with no releases', () => {
    expect(parseChangelog('# Changelog\n\nNothing yet.\n')).toEqual([]);
  });
});

describe('getChangelog', () => {
  it('reads and parses the repository CHANGELOG.md', () => {
    const releases = getChangelog();

    expect(releases.length).toBeGreaterThan(0);
    releases.forEach((release) => {
      expect(release.version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(release.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(release.groups.length).toBeGreaterThan(0);
    });
  });

  it('lists the newest release first', () => {
    const releases = getChangelog();

    expect(releases[0].date >= releases[releases.length - 1].date).toBe(true);
  });
});

describe('splitInlineCode', () => {
  it('returns a single plain segment when there is no inline code', () => {
    expect(splitInlineCode('Just plain text.')).toEqual([
      { text: 'Just plain text.', code: false },
    ]);
  });

  it('marks backticked spans as code and drops the backticks', () => {
    expect(splitInlineCode('Added `AGENTS.md` to the repo.')).toEqual([
      { text: 'Added ', code: false },
      { text: 'AGENTS.md', code: true },
      { text: ' to the repo.', code: false },
    ]);
  });

  it('handles several code spans in one item', () => {
    expect(splitInlineCode('`a` and `b`')).toEqual([
      { text: 'a', code: true },
      { text: ' and ', code: false },
      { text: 'b', code: true },
    ]);
  });
});
