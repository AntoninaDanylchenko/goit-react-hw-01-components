import PropTypes from 'prop-types';
import { StatList, StatListItem, Percentage } from './StatisticList.styled';

function StatisticList({ stats }) {
  return (
    <StatList>
      {stats.map(stat => (
        <StatListItem key={stat.id}>
          <span className="label">{stat.label}</span>
          <Percentage>{stat.percentage}%</Percentage>
        </StatListItem>
      ))}
    </StatList>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticList;
