import React from 'react'
import styled from 'styled-components'

const EmptyState = () => (
  <StyledEmptyState>
    <span>😐</span>
    <span>No results found...</span>
  </StyledEmptyState>
)

const StyledEmptyState = styled.p`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`

export default EmptyState
