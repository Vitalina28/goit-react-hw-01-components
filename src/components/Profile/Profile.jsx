import css from './Profile.module.css'
import user from '../User/user.json'
import { UserName } from './UserName'
import { Stats } from './stats'

export const Profile = () => {
    return (
<div className={css.profile}>
<UserName user={user} /> 
<Stats stats={user.stats} />
</div>
    )
}

