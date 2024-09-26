'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export function PostPortableText(props: {
  value: string // 现在 value 应该是一个字符串，而不是 any
}) {
  return (
    <ReactMarkdown   remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}>
      {props.value}
    </ReactMarkdown>
  )
}