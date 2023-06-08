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
                From a young age, I was drawn to computers and the limitless possibilities they offered. I started my journey into the world of software engineering during the COVID-19 outbreak, where I was introduced to HTML and fell in love with creating websites. This experience led me to explore JavaScript, which further fueled my fascination for coding and solidified my decision to pursue computer science as my major.
              </p>
              <p>
                To build a strong foundation, I embarked on the CS50 course by David Malan at Harvard University, where I gained a comprehensive understanding of computer science fundamentals. Additionally, I have completed numerous Coursera courses, continuously expanding my knowledge and staying up-to-date with the latest technologies. My journey continued at university, where I delved into Python, Java, and databases. Thanks to my strong foundational knowledge, I found these subjects enjoyable and relatively straightforward to grasp.
              </p>
              <p>
                Although my university experience has been entirely online, I have dedicated my free time to pursuing full-stack JavaScript development. I have made significant progress in mastering the MERN Stack, TypeScript, Next.js, and Tailwind CSS. This exploration has allowed me to create dynamic and responsive web applications that combine both functionality and aesthetics. Constantly pushing my boundaries, I am passionate about honing my skills and exploring new frontiers in web development.
              </p>
              <p>
                Beyond my academic and technical pursuits, I find entertainment in watching movies, listening to music, and reading books for personal growth. These hobbies provide me with inspiration and a means of relaxation, helping me maintain a well-rounded approach to life. As I continue my journey as a CS student and web developer, I am excited to contribute to the ever-evolving world of technology. I firmly believe in the power of software to shape our future and make a positive impact. Let's collaborate and bring innovative ideas to life!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/khantseithuu" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/khantseithuu" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/khantseithu" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/khantsithu" icon={LinkedInIcon} className="mt-4">
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
