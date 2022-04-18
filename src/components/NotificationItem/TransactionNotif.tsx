import React from 'react'
import { ReceiveIcon } from '../../icons/receive'
import { SendIcon } from '../../icons/send'
import { NotifType, TransactionNotifData } from '../../types'
import CoinUnit from '../CoinUnit'
import { ItemProps, StyledItem, StyledItemText } from './Item'

const TransactionNotif = ({ type, data }: ItemProps) => {
  if (type === NotifType.TRANSACTION_SENT) {
    const notifData = data as TransactionNotifData
    return (
      <StyledItem>
        <SendIcon />
        <StyledItemText>
          Sent {notifData.amount}
          <CoinUnit unit={notifData.unit} /> to {notifData.to}
        </StyledItemText>
      </StyledItem>
    )
  }
  if (type === NotifType.TRANSACTION_RECEIVED) {
    const notifData = data as TransactionNotifData
    return (
      <StyledItem>
        <ReceiveIcon />
        <StyledItemText>
          Received {notifData.amount}
          <CoinUnit unit={notifData.unit} /> from {notifData.from}
        </StyledItemText>
      </StyledItem>
    )
  }
  return null
}

export default TransactionNotif
