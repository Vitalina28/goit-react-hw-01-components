import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Transactions } from "./TransactionHistory/Transactions";
import user from '../Path/user.json';
import data from '../Path/data.json';
import friends from '../Path/friends.json';
import transactions from '../Path/transactions.json'





export const App = () => {
  return (
     <>
      <Profile users={user} />
      <Statistics title="Upload stats" stats={ data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  )  
}
