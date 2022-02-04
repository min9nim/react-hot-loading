import React, { useState } from 'react'
import Loading from './Loading'

const dec = num => {
  if (num === 0) {
    throw Error('Cannot decrease loading count as current count is 0')
  }
  return --num
}

const inc = num => ++num

let setLoadingFn = null

export function LoadingProvider(props) {
  const [count, setCount] = useState(0)
  const loading = Boolean(count)

  if (!setLoadingFn) {
    setLoadingFn = start => (start ? setCount(inc) : setCount(dec))
  }

  if (!loading) {
    return null
  }
  return props.loading || <Loading />
}

export const setLoading = start => {
  if (setLoadingFn) {
    setLoadingFn(start)
  } else {
    throw Error('`setLoadingFn` is not initialized yet')
  }
}

export const asyncLoading =
  fn =>
  async (...args) => {
    try {
      setLoading(true)
      return await fn(...args)
    } finally {
      setLoading(false)
    }
  }

export const DefaultLoading = Loading
