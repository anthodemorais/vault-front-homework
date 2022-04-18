// ***** NOTIFICATIONS *****

// this is in a separate type in case more shared props are added in the future like notif date, isRead...
export type SharedNotifData = {
  id: number
}

export type TransactionNotifData = SharedNotifData & {
  from: string
  to: string
  unit: string
  amount: number
}

export type AccountCreationNotifData = SharedNotifData & {
  name: string
  currency: string
}

export type NotifData = TransactionNotifData | AccountCreationNotifData

export enum NotifType {
  TRANSACTION_SENT = 'TRANSACTION_SENT',
  TRANSACTION_RECEIVED = 'TRANSACTION_RECEIVED',
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
}

export type Notif = {
  id: string
  type: NotifType
  data: NotifData
}

// ***** SHARED PROPS *****
export interface IconsProps {
  fill?: string
  width?: number
  height?: number
}
