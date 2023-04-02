import { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const LogoutButton = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { myData, isLoggingOut } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          트윗
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{myData.nickname[0]}</Avatar>}
        title={myData.nickname}
      />
      <LogoutButton onClick={onLogout} loading={isLoggingOut}>
        로그아웃
      </LogoutButton>
    </Card>
  );
};

export default UserProfile;
