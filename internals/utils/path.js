const path = require('path');

exports.fromRoot = (...dirs) => path.resolve(__dirname, '../../', ...dirs);
