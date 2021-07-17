import React from "react";
import { Table, Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const FileComponent = () => {
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
      dataIndex: "xdate",
      key: "xdate",
    },
    {
      title: "Details",
      dataIndex: "action",
      key: "action",
      render: (text) => <EyeOutlined />,
    },
  ];

  const data1 = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "hyderabad",
      tags: ["nice", "developer"],
      xdate: "Tue,21 Sep 2020",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "hyderabad",
      tags: ["loser"],
      xdate: "Tue,21 Sep 2020",
    },
  ];
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "hyderabad",
      tags: ["nice", "developer"],
      xdate: "Tue,21 Sep 2020",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "hyderabad",
      tags: ["loser"],
      xdate: "Tue,21 Sep 2020",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "hyderabad",
      tags: ["cool", "teacher"],
      xdate: "Tue,21 Sep 2020",
    },
  ];

  return (
    <div className="flxes file">
      <Tabs defaultActiveKey="1">
        <TabPane tab="on-Going" key="1">
          <Card
            className="completed-bt"
            bordered={false}
            style={{
              width: 1200,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <Table
              className="completed"
              columns={columns}
              dataSource={data1}
              pagination={false}
            />
          </Card>
        </TabPane>
        <TabPane tab="Completed" key="3">
          <Card
            bordered={false}
            style={{
              width: 1200,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <Table
              className="ongoning"
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FileComponent;
