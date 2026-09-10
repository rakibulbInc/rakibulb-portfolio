import { describe, it, expect } from 'vitest';
import { APP_VERSION } from '../version';
import { getChangelog } from '../changelog';

describe('APP_VERSION', () => {
  it('is a semver string', () => {
    expect(APP_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it('matches the newest release in the changelog', () => {
    expect(getChangelog()[0].version).toBe(APP_VERSION);
  });
});
