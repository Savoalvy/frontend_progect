import type { Configuration } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';

export default ({
  config,
}: {
  config: Configuration;
}): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  /* eslint-disable */

  if (config.resolve) {
    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, '..', '..', 'src/app'),
      '@shared': path.resolve(__dirname, '..', '..', 'src/shared'),
      '@entities': path.resolve(__dirname, '..', '..', 'src/entities'),
      '@features': path.resolve(__dirname, '..', '..', 'src/features'),
      '@pages': path.resolve(__dirname, '..', '..', 'src/pages'),
      '@widgets': path.resolve(__dirname, '..', '..', 'src/widgets'),
      'react/jsx-runtime.js': 'react/jsx-runtime',
    };
  }

  if (config.module?.rules) {
    config.module.rules = config.module.rules.filter(rule => {
      if (rule === '...') return true;
      if (rule && typeof rule === 'object' && 'test' in rule) {
        const test = rule.test as RegExp;
        return !(test.test('.css') || test.test('.scss') || test.test('.svg'));
      }
      return true;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.module\.s[ac]ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              exportLocalsConvention: 'camelCase',
            },
            importLoaders: 2,
          },
        },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: false,
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../../src'),
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      exclude: [/\.module\.s[ac]ss$/, /node_modules/],
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: false,
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../../src'),
    });

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              exportLocalsConvention: 'camelCase',
            },
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
      include: path.resolve(__dirname, '../../src'),
    });

    config.module.rules.push({
      test: /(?<!\.module)\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../../src'),
      exclude: /node_modules/,
    });
  }

  return config;
};
