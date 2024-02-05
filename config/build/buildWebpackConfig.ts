import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buidResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buidResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
