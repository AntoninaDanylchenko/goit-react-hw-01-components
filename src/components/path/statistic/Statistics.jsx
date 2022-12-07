import PropTypes from 'prop-types';
import { StatisticSection, Title } from './Statistic.styled';

function Statistic({ title, children }) {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      {children}
    </StatisticSection>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistic;
