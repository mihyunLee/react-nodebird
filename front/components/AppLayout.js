import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const items = [
  {
    label: (
      <Link href="/">
        <a>노드버드</a>
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link href="/profile">
        <a>프로필</a>
      </Link>
    ),
    key: "profile",
  },
  {
    label: <Input.Search style={{ verticalAlign: "middle" }} enterButton />,
    key: "search",
  },
  {
    label: (
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    ),
    key: "signup",
  },
];

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://codingmyoni.tistory.com/"
            target="_blank"
            rel="noreferrer noopner"
          >
            Made by Nor
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
