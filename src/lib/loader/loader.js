import { readdir } from 'node:fs/promises';

/** @type {import('./types').Loader} */
export const loader = {
  loadDir: async (path, deps, suffix = '') => {
    const absolutePath = process.cwd() + path;
    /** @type {Record<string, any>} */
    const container = {};
    const dirs = await readdir(absolutePath);
    for (const dir of dirs) {
      if (dir.endsWith('d.ts')) continue;
      const { init } = await import(`${absolutePath}/${dir}/${dir}.js`);
      container[dir + suffix] = init(deps);
    }

    return container;
  },
};
