import './TransactionHistory.module.css'

export const TransactionHistory = ({data}) => {
    return data.map((item)=> {
        return (
            <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )
       })
}