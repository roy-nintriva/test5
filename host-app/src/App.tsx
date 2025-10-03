import React, { Suspense } from "react";



const RemoteButton = React.lazy(() => import("remote_app/Button"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}

export default App;
