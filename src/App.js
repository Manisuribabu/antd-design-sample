import React from "react";
import { Layout } from "antd";
import SideBarComponent from "./components/sideBarComponent";
import Home from "./components/HomeComponent";
import FileComponent from "./components/FileComponent";
import "./App.css";
import "antd/dist/antd.css";

const { Sider } = Layout;
function App() {
  const [page, setPage] = React.useState("home");
  return (
    <Layout>
      <Sider>
        <SideBarComponent handleClick={(e) => setPage(e)} />
      </Sider>
      {page === "home" && <Home />}
      {page === "report" && <FileComponent />}
    </Layout>
  );
}

export default App;
