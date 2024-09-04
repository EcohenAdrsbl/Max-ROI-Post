/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'Max ROI Post',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: 'https://i.postimg.cc/QxsMCsL2/5-Steps-to-Maximize-Your-ROI.png',
    intents: [
      <Button.Link href ='https://www.addressable.io/blog/5-proven-steps-to-skyrocket-your-roi-with-crypto-ads'>Ali's Insights 🎯</Button.Link>
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
