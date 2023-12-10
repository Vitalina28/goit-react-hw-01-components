import { StatsList } from './StatsLIst';
import { TitleStatistics } from './TitleStatistics';
import css from './Statistics.module.css'


export const Statistics = () => {
    return (
        <section className={css.statistics}>
            <TitleStatistics title="Upload stats" />
            <StatsList />
        </section>
    ) 
}