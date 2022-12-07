import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  padding-top: 20px;
  border-radius: 5px;
  box-shadow: -1px 0px 8px 0px rgba(0, 0, 0, 0.4);
  background-color: rgba(255, 255, 255);
  margin-bottom: 50px;
`;
export const Description = styled.div`
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
`;
export const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 150px;
  margin-bottom: 10px;
`;
export const UserName = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const UserInfo = styled.p`
  text-align: center;
  color: grey;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  font-size: 14px;
  width: 100%;
  height: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(220, 220, 220, 0.5);
  padding: 15px;
  align-items: center;
  gap: 5px;
  color: black;
  border: 1px solid rgb(220, 220, 220);
  font-weight: 500;
`;
export const Label = styled.span`
  color: grey;
  font-size: 14px;
  font-weight: 400;
`;
