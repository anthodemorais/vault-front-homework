import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string
  type: string
  data: string
}

const Item = ({ id, type, data }: Props) => {
  return (
    <StyledItem>
      <span>{type}</span>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  padding: 8px;
  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 4px;
`

export default Item
