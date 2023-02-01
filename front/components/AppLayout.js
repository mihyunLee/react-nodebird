import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

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
    label: (
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    ),
    key: "signup",
  },
];

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal" items={items} />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
