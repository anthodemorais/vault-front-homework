// this is in a separate type in case more shared props are added in the future like notif date, isRead...
export type SharedNotifData = {
  id: number
}

type TransactionNotifData = SharedNotifData & {
  from: string
  to: string
  unit: string
  amount: number
}

type AccountCreationNotifData = SharedNotifData & {
  name: string
  currency: string
}

export type NotifData = TransactionNotifData | AccountCreationNotifData

export type Notif = {
  id: string
  type: string
  data: NotifData
}
