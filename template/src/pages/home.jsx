import React from 'react'
import styled from 'styled-components'
import TemplateMaster from '../templates/Master'
import { setIsLoading } from '../actions'

const HomeWrapper = styled.div`
  width: 100%;
`

const Home = () => {
  return (
    <TemplateMaster>
      <HomeWrapper>HOME</HomeWrapper>
    </TemplateMaster>
  )
}

export default Home
