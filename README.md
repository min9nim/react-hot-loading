# react-hot-loading

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-hot-loading.svg)](https://www.npmjs.com/package/react-hot-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hot-loading
```

## Usage

App.js
```jsx
import React from 'react'
import {LoadingProvider} from 'react-hot-loading'
import YourLoading from './YourLoading'
import Hello from './Hello'

export default function App(){
  return (
      <>
        <LoadingProvider loading={<YourLoading />}/>
        <Hello/>
      </>
  )
}
```

Hello.js
```jsx
import React, {useEffect} from 'react'
import {setLoading} from 'react-hook-loading'

export default () => {
  useEffect(() => {
    setLoading(true)    // show modal loading
    setTimeout(() => {
      setLoading(false) // hide modal loading
    }, 2000)
  }, [])

  return <div>hello world</div>
}
```

## License

MIT © [min9nim](https://github.com/min9nim)
