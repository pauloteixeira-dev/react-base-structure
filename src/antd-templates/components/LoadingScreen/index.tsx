/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import {
  LoadingOutlined,
} from '@ant-design/icons'
import { LoaderBackground } from './styles'

const LoadingScreen = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return (
    <LoaderBackground>
      <LoadingOutlined spin />
    </LoaderBackground>
  )
}

export default LoadingScreen
