// npm licensed
// npm conduct
const chalk = require('chalk')
const sym = require('log-symbols')

const greenI = chalk.green.inverse
const green = chalk.green

const red = chalk.red
const redI = chalk.red.bold.inverse

const orange = chalk.keyword('orange')
const orangeI = chalk.keyword('orange').inverse

const blue = chalk.blue
const blueI = chalk.blue.inverse

module.exports = options => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define all options`,
  }
  const opts = { ...defaultOptions, ...options }
  const { type, msg, name } = opts
  const printName = name ? name : type.toUpperCase()

  if (type === `info`) {
    console.log(`${sym.info} ${blueI(printName)}  ${blue(msg)}\n`)
  }

  if (type === `success`) {
    console.log(`${sym.success} ${greenI(printName)} ${green(msg)}\n`)
  }

  if (type === `warning`) {
    console.log(`${sym.warning} ${orangeI(printName)}  ${orange(msg)}\n`)
  }

  if (type === `error`) {
    console.log(`${sym.error} ${redI(printName)}  ${red(msg)}\n`)
  }
}
