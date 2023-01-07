// This file is for the path to work on different opperating systems
    // since it is not all operating systems that use /
    // Windows uses backslash\ instead of slash/
const path = require('path')

module.exports = path.dirname(require.main.filename)