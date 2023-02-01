import { useMemo } from "react";
import PropTypes from "prop-types";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  const listStyle = useMemo(() => ({ marginBottom: 20 }), []);
  const buttonStyle = useMemo(
    () => ({ textAlign: "center", margin: "10px 0" }),
    []
  );
  const itemStyle = useMemo(() => ({ marginTop: 20 }), []);

  return (
    <List
      style={listStyle}
      grid={{ gutter: 4, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={buttonStyle}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={itemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
