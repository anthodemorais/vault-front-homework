import React from 'react'
import { StarsIcon } from '../../icons/stars'
import { AccountCreationNotifData } from '../../types'
import { ItemProps, StyledItem, StyledItemText } from './Item'

const AccountCreationNotif = ({ data }: ItemProps) => {
  const notifData = data as AccountCreationNotifData
  return (
    <StyledItem>
      <StarsIcon />
      <StyledItemText>
        {notifData.currency} account {notifData.name} created
      </StyledItemText>
    </StyledItem>
  )
}

export default AccountCreationNotif
