import React from 'react'
import styled from 'styled-components'
function Trips() {
  return (
    <ProductsContiner>
      <ProductHeading>Heading</ProductHeading>
      <ProductWrapper>Wrapper</ProductWrapper>
    </ProductsContiner>
  )
}

export default Trips

const ProductsContiner = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: white;
  color: #fff;
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 3vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div`
`

