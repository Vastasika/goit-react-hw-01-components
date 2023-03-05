import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>;
        <ul className={css.statList}>
            {stats.map((stat) =>
  <li key={stat.id}>
    <span className={css.label}>{stat.label}</span>
    <span className={css.percentage}>{stat.percentage}</span>
                </li>
            )}
        </ul>; 
    </section>;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
     id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }).isRequired,
}
