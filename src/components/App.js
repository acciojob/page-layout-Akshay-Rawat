import React from "react";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <PageLayout
      header={<h1>My Website</h1>}
      footer={<p>© 2023 My Website</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
};

export default App;