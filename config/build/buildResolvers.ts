import webpack from "webpack";

export function buidResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
