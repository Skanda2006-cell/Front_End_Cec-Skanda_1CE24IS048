import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ListExample from "./components/List";
import TableExample from "./components/Table";
import FormExample from "./components/Form";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("list")}>List</button>
        <button onClick={() => setActiveTab("table")}>Table</button>
        <button onClick={() => setActiveTab("form")}>Form</button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <ListExample />}
        {activeTab === "table" && <TableExample />}
        {activeTab === "form" && <FormExample />}
      </div>
    </div>
  );
}

export default App;
