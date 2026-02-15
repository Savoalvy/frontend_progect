import { ResolveOptions } from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';

export function buildResolvers(
  options: BuildOptions,
): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@app': path.resolve(options.paths.src, 'app'),
      '@pages': path.resolve(options.paths.src, 'pages'),
      '@widgets': path.resolve(
        options.paths.src,
        'widgets',
      ),
      '@features': path.resolve(
        options.paths.src,
        'features',
      ),
      '@entities': path.resolve(
        options.paths.src,
        'entities',
      ),
      '@shared': path.resolve(options.paths.src, 'shared'),
    },
  };
}
