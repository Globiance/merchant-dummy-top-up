// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const EMPTY_EXPORT = 'module.exports = {};';

export default {
  process() {
    return {
      code: EMPTY_EXPORT,
    };
  },
  processAsync() {
    return Promise.resolve({
      code: EMPTY_EXPORT,
    });
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
