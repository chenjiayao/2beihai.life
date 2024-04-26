import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'
import A215Image from '~/assets/a2_15.png'
import Image from 'next/image';

const title = '我的项目'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
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
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我过去的项目冒险之旅。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          糟糕，我没有拿得出手的项目！🤣
          <br />
          <br />
          GitHub 上没有那种 README 好看、star 很多、commit message  带有 emoji 的项目。
          <br />
          也没有那种独立完成的 UI 很好看的 App 或者 Web。
        </p>
        <br />
        <Image src={A215Image} alt="" width={68} height={60} />
      </header>
      <div className="mt-16 sm:mt-20">
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">不过，这个页面先留着，我还想试试。😘</p>
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
