import Profile from './Profile';
import user from './path/to/user.json';
import Statistic from './Statistics';
import StatisticList from './StatisticList';
import data from './path/to/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
    </div>
  );
};
