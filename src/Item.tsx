import React from 'react'
import styled from 'styled-components'
import { NotifData } from './types'

type ItemProps = {
  id: string
  type: string
  data: NotifData
}

const Item = ({ id, type, data }: ItemProps) => {
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
