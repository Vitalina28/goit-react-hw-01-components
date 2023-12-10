import css from './UserName.module.css'

export const UserName = ({user}) => {
    return (
        <div className={css.description}>
    <img
      src={user.avatar}
      alt={user.username}
      className={css.avatar}
      width='200px'
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>@{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>
    )
    
}