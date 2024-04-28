import React, { useState } from "react";
import { Graph } from "./components/graph.js";
import { nPrimes } from "./logic/nPrimes.js";

// handle the first 1000 prime numbers
const primes = [...nPrimes(1000n)].map((n, i) => ({
  index: i,
  prime: Number(n),
}))

// render the app
export default function App() {
  return (
    <html style={styles.root}>
      <head>
        <meta charSet="utf-8" />
        <title>Graphs</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={styles.container}>
        <Graph dataKey="prime" data={primes} interval={25} />
      </body>
    </html>
  );
}

const styles = Object.freeze({
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    margin: 0,
  },
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
})