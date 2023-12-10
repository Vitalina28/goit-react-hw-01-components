
import css from './FriendItem.module.css'

export const FriendItem = ({friends}) => {
    return friends.map((friend) => {
      
        return (
<li key={friend.id} className={css.item}>
  <span className={`${css.status} ${css[friend.isOnline]}`}>{friend.isOnline}</span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li> 
        )
    })
}