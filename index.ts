import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'
import { renderToReadableStream} from 'react-dom/server.browser'
import { createElement } from "react";
import App from './src/App.js'

// bundle client side code
await Bun.build({
  entrypoints: ['./src/html/index.tsx'],
  outdir: './public',
});

const app = new Elysia()
  .use(staticPlugin())
  .get('/', async () => {

    // create our react App component
    const app = createElement(App)

    // render the app component to a readable stream
    const stream = await renderToReadableStream(app, {
      bootstrapScripts: ['/public/index.js']
    })

    // output the stream as the response
    return new Response(stream, {
      headers: { 'Content-Type': 'text/html' }
    })
  })
  .onStart(() => console.log('Server started on http://localhost:3000'))
  .listen(3000)
