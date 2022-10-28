import { Roboto } from '@next/font/google'

import App from './App'
import EmotionRootStyleRegistry from './EmotionRootStyleRegistry'
import RootAppLayout from './RootAppLayout'
import './global.css'

const roboto300 = Roboto({
  weight: '300',
})
const roboto400 = Roboto({
  weight: '400',
})
const roboto500 = Roboto({
  weight: '500',
})
const roboto700 = Roboto({
  weight: '700',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${roboto300.className} ${roboto400.className} ${roboto500.className} ${roboto700.className}`}>
    <head>
      <title>Next.js 13 with MUI</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Next.js 13 with MUI" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <EmotionRootStyleRegistry>
        <App>
          <RootAppLayout>
            {children}
          </RootAppLayout>
        </App>
      </EmotionRootStyleRegistry>
    </body>
  </html>
)

export default RootLayout
