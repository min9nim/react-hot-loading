import React, {useEffect} from 'react'
import { setLoading} from 'react-hot-loading'

export default () => {
  console.log('hello render')
  useEffect(() => {
    console.log('hello useEffect')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return <div>hello world!!</div>
}
