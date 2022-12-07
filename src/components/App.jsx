import Profile from './path/profile/Profile';
import user from './path/to/user.json';
import Statistic from './path/statistic/Statistics';
import StatisticList from './path/statistic/StatisticList';
import data from './path/to/data.json';
import FriendList from './path/friendList/FriendList';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';
import TransactionHistory from './path/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: 'rgba(230, 230, 250, 0.4)',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats">
        <StatisticList stats={data} />
      </Statistic>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
