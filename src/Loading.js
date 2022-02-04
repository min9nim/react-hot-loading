import React from 'react'
// import styles from './Loading.module.css'

const modalStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  opacity: '0.7',
  backgroundColor: '#111',
}
const loadingStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: '#fff',
  color: '#222222',
  padding: '2px',
  WebkitTransform: 'translate(-50%, -50%)',
  msTransform: 'translate(-50%, -50%)',
  MozTransform: 'translate(-50%, -50%)',
  OTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
}

export default function Loading() {
  return (
    <React.Fragment>
      <div style={modalStyle} />
      <div style={loadingStyle}>Loading..</div>
    </React.Fragment>
  )
}
