import React  from 'react'
import { setLoading, asyncLoading } from 'react-hot-loading'

export default () => {
  const onClick = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })

  return (
    <div>
      <button
        onClick={async () => {
          setLoading(true)
          await onClick()
          setLoading(false)
        }}
      >
        usage1
      </button>
      <button
        onClick={asyncLoading(onClick)}
      >
        usage2
      </button>
    </div>
  )
}
