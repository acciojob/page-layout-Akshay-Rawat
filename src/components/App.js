import React from "react";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <PageLayout
      header={<h1>This is Header</h1>}
      footer={<h3>This is Footer</h3>}
    >
      <p>This is main content</p>
    </PageLayout>
  );
}

export default App;