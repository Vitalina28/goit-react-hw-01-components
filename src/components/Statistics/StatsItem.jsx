import css from './StatsItem.module.css'

export const StatsItem = ({date}) => {
    return date.map((item) => {
        return (
            <li key={item.id} className={css.item}>
      <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}</span>
    </li>
        ) 
    })
}