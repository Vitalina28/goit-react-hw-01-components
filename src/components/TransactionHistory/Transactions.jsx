import { TransactionTable } from "./TransactionTable"
import {TransactionBody} from "./TransactionBody"
import css from './Transactions.module.css'

export const Transactions = () => {
    return (
      <table className={css.transactionHistory}>
        <TransactionTable />
        <TransactionBody />
      </table>
    ) 
}

