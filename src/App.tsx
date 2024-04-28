import React, { useState } from "react";
import { Graph } from "./components/graph.js";

const data = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map((n, i) => ({
  name: i,
  pv: n,
  uv: n * 2,
}))

export default function App() {
  return (
    <html style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
      <head>
        <meta charSet="utf-8" />
        <title>Graphs</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ width: '100%', height: '100vh', margin: 0 }}>
        <div id="root" style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
          <Graph data={data} />
        </div>
      </body>
    </html>
  );
}
