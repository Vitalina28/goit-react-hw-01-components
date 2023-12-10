import friends from '../Friend/friends.json'
import { FriendItem } from "./FriendItem"
import css from './FriendList.module.css'

export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      <FriendItem friends={friends}  />
    </ul>
  ) 
}






