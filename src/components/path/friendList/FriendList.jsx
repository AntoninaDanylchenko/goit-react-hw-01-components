import PropTypes from 'prop-types';
import {
  FriendListBlock,
  FriendListItem,
  FriendStatus,
} from './FriendList.styled.jsx';
const getBgColor = variant => {
  return variant ? 'green' : 'red';
};

function FriendList({ friends }) {
  return (
    <FriendListBlock>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendStatus
            style={{ backgroundColor: getBgColor(friend.isOnline) }}
          ></FriendStatus>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </FriendListItem>
      ))}
    </FriendListBlock>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default FriendList;
