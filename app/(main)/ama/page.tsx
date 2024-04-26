import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '提供一对一的咨询服务（Ask Me Anything）。我有普通人生活、末流本科学习、三线城市成长、一般后端开发等经验，可以为你不负责任回答相关的问题，无法支持纯英语沟通。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥0 - 30分钟</strong>
          </li>
          <li>
            <strong>¥0 - 60分钟</strong>
          </li>
        </ul>

        <p>你可以使用冥想支付费用，一旦完成支付，通过意念随时和我沟通。</p>
        <strong>希望这次的沟通可以帮助到你。😘</strong>
      </article>
    </Container>
  )
}
