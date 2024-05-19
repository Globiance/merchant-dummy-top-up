import babelJest from 'babel-jest';
import { fileURLToPath } from 'url';

export default babelJest.createTransformer({
  presets: [[fileURLToPath(import.meta.resolve('babel-preset-inferno-app'))]],
  babelrc: false,
  configFile: false,
});
