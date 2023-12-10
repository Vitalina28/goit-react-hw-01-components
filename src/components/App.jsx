import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Transactions } from "./TransactionHistory/Transactions";





export const App = () => {
  return (
     <>
      <Profile />
      <Statistics />
      <FriendList />
      <Transactions />
    </>
  )  
}
