import React from "react";
import { Layout } from "antd";
import TableComponent from "./TableComponent";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content>
        <TableComponent />
      </Content>
    </Layout>
  );
};

export default Home;
