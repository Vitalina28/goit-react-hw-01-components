import data from '../Data/data.json';
import { StatsItem } from "./StatsItem";
import css from './StatsLIst.module.css';

export const StatsList = () => {
  return (
       <ul className={css.statList}>
    <StatsItem date={data} />
  </ul>
    )
}
