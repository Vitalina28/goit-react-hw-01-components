import transaction from '../transactions/transactions.json'
import { TransactionHistory } from "./TransactionHistory"
import './TransactionBody.module.css'

export const TransactionBody = () => {
    return (
        <tbody>
            <TransactionHistory data={transaction} />
        </tbody>
    )
}