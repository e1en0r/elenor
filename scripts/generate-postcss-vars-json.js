/**
 * This script compiles the PostCSS config into JSON files
 */
const chalk = require('chalk')
const darkTheme = require('../postcss/vars/darkTheme.js');
const lightTheme = require('../postcss/vars/lightTheme.js');
const writeFileSyncRecursive = require('./utils/write-file');

const writeJson = (filename, content) => {
  console.log(chalk.blue(`🤖 Generating ${filename}`))
  writeFileSyncRecursive(filename, JSON.stringify(content, null, 2));
  console.log(chalk.green(`🚀 Generated ${filename}`));
}

writeJson('./src/config/darkTheme.json', darkTheme)
writeJson('./src/config/lightTheme.json', lightTheme)
