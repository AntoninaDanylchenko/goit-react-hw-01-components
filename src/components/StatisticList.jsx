import PropTypes from 'prop-types';

function StatisticList({ stats }) {
  return (
    <ul class="stat-list">
      {stats.map(stat => (
        <li key={stat.id} class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
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
