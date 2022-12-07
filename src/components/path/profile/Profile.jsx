import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  Description,
  UserInfo,
  UserName,
  Stats,
  StatsItem,
  Label,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
