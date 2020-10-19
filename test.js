const alert = require('./index.js')


alert({
  type: 'info',
  msg: `Some general info for ya.`,
})

alert({
  type: 'success',
  msg: 'Everything finished!',
  name: 'DONE'
})

alert({
  type: 'warning',
  msg: `You're getting pretty close`,
})

alert({
  type: 'error',
  msg: 'Boom things blow up!',
})
