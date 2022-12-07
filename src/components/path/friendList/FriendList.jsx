import PropTypes from 'prop-types';
import { FriendListBlock, FriendListItem } from './FriendList.styled.jsx';

function FriendList({ friends }) {
  return (
    <FriendListBlock>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <span className="status"></span>
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
