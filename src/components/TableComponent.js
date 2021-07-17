import React from "react";
import { Table, Card, Button } from "antd";
const TableComponent = () => {
  const columns = [
    {
      title: "testName",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "location",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "slotingtimes",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "x- ray Date",
      key: "address",
      dataIndex: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "hyderabad",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "hyderabad",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "hyderabad",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="flxes">
      <div className="site-card-border-less-wrapper">
        <Card
          bordered={false}
          style={{
            width: 900,
            marginBottom: 30,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <h1>Hello,Micheal!</h1>
          <p>
            Empowering healthcare diagnosis with artificial intellingence,test
            your ressults below!!
          </p>
          <Button className="exampletest">Example Test</Button>
        </Card>
        <Card
          bordered={false}
          style={{ width: 900, marginLeft: 30, marginRight: 30 }}
        >
          <h3>Your Recente tests</h3>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </div>
      <Card bordered={false} style={{ width: 500, marginRight: 20 }}>
        <h1>Hello,Micheal!</h1>
        <p>
          Empowering healthcare diagnosis with artificial intellingence,test
          your ressults below!!
        </p>
      </Card>
    </div>
  );
};

export default TableComponent;
