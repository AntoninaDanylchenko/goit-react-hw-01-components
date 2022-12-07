import styled from '@emotion/styled';

export const FriendListBlock = styled.ul`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  background-color: rgba(230, 230, 250, 0.4);
`;

export const FriendListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: -1px 0px 8px 0px rgba(0, 0, 0, 0.2);

  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const FriendStatus = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;
