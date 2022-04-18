import React from 'react'
import styled from 'styled-components'
import { NotifData, NotifType } from '../../types'
import { typeToComponentMapping } from './typeToComponentMapping'

export type ItemProps = {
  type: NotifType
  data: NotifData
}

const Item = ({ type, data }: ItemProps) => {
  const Component = typeToComponentMapping[type]
  if (Component) {
    return <Component data={data} type={type} />
  }
  return null
}

export const StyledItem = styled.div`
  padding: 8px;
  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 4px;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`

export const StyledItemText = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 8px;
`

export default Item
