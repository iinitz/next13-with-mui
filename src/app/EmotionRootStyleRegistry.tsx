'use client'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'

const EmotionRootStyleRegistry = ({ children }: { children: React.ReactNode }) => {
  const [cache] = useState(() => {
    const c = createCache({ key: 'css' })
    c.compat = true
    return c
  })
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))
  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default EmotionRootStyleRegistry
