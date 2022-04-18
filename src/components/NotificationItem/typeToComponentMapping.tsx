import { NotifType } from '../../types'
import AccountCreationNotif from './AccountCreationNotif'
import TransactionNotif from './TransactionNotif'

// This dict maps a notification type to a component. There is only 3 types for now,
// but as more types are added in the future, more components will be created and we don't want to have a giant if...else
// inside the Item component
export const typeToComponentMapping = {
  [NotifType.TRANSACTION_SENT]: TransactionNotif,
  [NotifType.TRANSACTION_RECEIVED]: TransactionNotif,
  [NotifType.ACCOUNT_CREATED]: AccountCreationNotif,
}
