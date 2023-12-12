import PropTypes from 'prop-types'
import css from './Profile.module.css'



export const Profile =  ({users}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={users.avatar}
                    alt={users.username}
                    className={css.avatar}
                    width='200px'
                />
                <p className={css.name}>{users.username}</p>
                <p className={css.tag}>@{users.tag}</p>
                <p className={css.location}>{users.location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{users.stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{users.stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{users.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    users: PropTypes.object,
}
