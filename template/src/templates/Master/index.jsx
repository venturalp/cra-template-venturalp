import React, { useRef, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { shouldStick } from './helpers'

const TemplateMaster = ({ children }) => {
  const wrapper = useRef()
  const footerRef = useRef()
  const [sticked, setSticked] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onResize = e => {
    const windowHeight = window.innerHeight
    const wrapperHeight = wrapper.current ? wrapper.current.offsetHeight : 0
    const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0

    setSticked(shouldStick(windowHeight, wrapperHeight, footerHeight))
  }

  return (
    <>
      <div ref={wrapper}>
        <Header />
        <div>{children}</div>
      </div>
      <Footer ref={footerRef} shouldStick={sticked} />
    </>
  )
}

export default TemplateMaster
