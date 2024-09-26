'use client'

import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function PostPortableText(props: {
  value: string // 现在 value 应该是一个字符串，而不是 any
}) {
  return (
    <Markdown
    remarkPlugins={[remarkGfm]}
  >
    {props.value}
  </Markdown>
  )
}