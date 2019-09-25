import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";
import "./App.scss";

function App() {
  const Content = lazy(() => importMDX("./Content.mdx"));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
