import { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const LogoutButton = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
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
      <Card.Meta avatar={<Avatar>N</Avatar>} title="Nor" />
      <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
    </Card>
  );
};

export default UserProfile;
