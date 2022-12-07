import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TableHeadCell,
  TableBodyCell,
  TableBodyRoll,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </TransactionTableHead>
      <tbody>
        {items.map(item => (
          <TableBodyRoll key={item.id}>
            <TableBodyCell>{item.type}</TableBodyCell>
            <TableBodyCell>{item.amount}</TableBodyCell>
            <TableBodyCell>{item.currency}</TableBodyCell>
          </TableBodyRoll>
        ))}
      </tbody>
    </TransactionTable>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
