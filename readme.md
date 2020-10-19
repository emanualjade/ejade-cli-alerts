## Install

```sh
npm install ejade-cli-alerts
```

### Usage

```js
const alert = require('ejade-cli-alerts);
```

Provide the `type`, `msg`, and optional `name`

```js  
alert({
  type: 'info',
  msg: `Some general info for ya.`,
})

alert({
  type: 'success',
  msg: 'Everything finished!',
  name: 'DONE',
})

alert({
  type: 'success',
  msg: 'Everything finished!',
})

alert({
  type: 'warning',
  msg: `You're getting pretty close`,
})

alert({
  type: 'error',
  msg: 'Boom things blow up!',
})
```
