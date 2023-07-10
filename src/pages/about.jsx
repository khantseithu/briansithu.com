import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Khant Sithu</title>
        <meta
          name="description"
          content="I’m Khant Sithu. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Khant Sithu, a freelance software developer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a dedicated and versatile Full Stack Developer, driven by a
                relentless pursuit of innovation and excellence. With a strong
                foundation in web development, I have honed my skills across a
                wide range of technologies and frameworks to deliver captivating
                and functional solutions.
              </p>
              <p>
                Throughout my career, I have mastered the art of crafting
                seamless user experiences on the frontend. Leveraging the power
                of React.js and Next.js, I design and develop intuitive
                interfaces that engage users and leave a lasting impression.
                With an eye for detail and a deep understanding of UI/UX
                principles, I ensure that every pixel is in its rightful place.
              </p>
              <p>
                On the backend, I wield the power of Node.js, Express, PHP, and
                Laravel to build robust and scalable applications. From crafting
                intricate server-side logic to integrating third-party APIs, I
                thrive on solving complex challenges and delivering efficient
                and reliable backend systems.
              </p>
              <p>
                On the backend, I wield the power of Node.js, Express, PHP, and
                Laravel to build robust and scalable applications. From crafting
                intricate server-side logic to integrating third-party APIs, I
                thrive on solving complex challenges and delivering efficient
                and reliable backend systems.
              </p>
              <p>
                To streamline collaboration and ensure the integrity of your
                projects, I harness the power of Git for version control. With
                an organized and efficient workflow, I work seamlessly with
                teams to deliver exceptional results.
              </p>
              <p>
                And when it comes to deployment and scalability, I am no
                stranger to the world of Docker. I encapsulate your
                applications, creating lightweight and portable containers that
                can be effortlessly deployed across various environments.
              </p>
              <p>
                Driven by a passion for continuous learning, I stay up to date
                with the latest industry trends and technologies. This enables
                me to offer cutting-edge solutions that push the boundaries of
                what's possible, giving you a competitive edge in the digital
                landscape.
              </p>
              <p>
                But enough about me. This portfolio website is about showcasing
                the projects I have worked on, the problems I have solved, and
                the impact I have made. I invite you to explore my portfolio,
                dive into the details of each project, and witness the passion
                and dedication that I pour into every line of code.
              </p>
              <p>
                Thank you for visiting my portfolio website. I am excited about
                the opportunity to collaborate and create something truly
                remarkable together.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/khantseithuu"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/khantseithuu"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/khantseithu"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/khantsithu"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:khantseithuu@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                khantseithuu@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
