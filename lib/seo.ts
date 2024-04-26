export const seo = {
  title: 'JayChen | 普通人、开发者',
  description:
    '我叫 JayChen，一个普通人哈哈哈哈哈',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://2beihai.life'
      : 'http://localhost:3000'
  ),
} as const
