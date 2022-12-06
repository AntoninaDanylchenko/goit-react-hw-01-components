import PropTypes from 'prop-types';

function Statistic({ title, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      {children}
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistic;
