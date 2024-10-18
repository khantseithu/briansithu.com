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
import portraitImage from '@/images/avatar-2023.jpeg'
import { Section } from '@/components/Section'
import {
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
} from '@/data'
import { Quote } from '@/components/Quote'
import { useEffect, useState } from 'react'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500" />
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
  const [randomQuote, setRandomQuote] = useState()

  useEffect(() => {
    setRandomQuote(Quotes[Math.floor(Math.random() * Quotes.length)])
  }, [])
  return (
    <>
      <Head>
        <title>About - Khant Si Thu</title>
        <meta
          name="description"
          content="I’m Khant Si Thu. I live in New York City, where I design the future."
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
              I’m Khant Si Thu, a passionate Full Stack Developer .
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there! I'm Khant Si Thu, a Full Stack Developer with a
                passion for all things JavaScript and TypeScript. Welcome to my
                corner of the web!
              </p>
              <section>
                <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  What Defines Me:
                </h2>
                <ul className="list-inside ">
                  <li>
                    <em className="font-semibold">Indie Hacker</em> : I thrive
                    in the world of indie hacking, infusing magic into every
                    project I undertake. From sleek front-ends to robust
                    back-end systems, I embark on a creative journey to bring
                    ideas to life.
                  </li>
                  <li>
                    <em className="font-semibold">
                      Passion for Web Development
                    </em>{' '}
                    : I thrive on using JavaScript and TypeScript to build
                    dynamic and responsive web applications.
                  </li>
                  <li>
                    <em className="font-semibold">Startup Enthusiast</em> : I'm
                    deeply immersed in the world of startups, SaaS, and
                    product-focused endeavors, always on the lookout for new
                    ideas and opportunities.
                  </li>
                  <li>
                    <em className="font-semibold">Continuous Learner</em> :
                    Whether it's exploring the latest tech trends or diving into
                    a captivating story, I believe in the power of continuous
                    learning and personal growth.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className=" mb-4 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  Books worth reading
                </h2>
                <ul className="list-inside list-disc ">
                  {Books.map((book) => (
                    <li key={book.name}>
                      <a
                        href={book.link}
                        className="text-zinc-600 underline hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-500"
                      >
                        {book.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className=" mb-4 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  Podcasts I listen to
                </h2>
                <ul className="list-inside list-disc ">
                  {Podcasts.map((podcast) => (
                    <li key={podcast.name}>
                      <a
                        href={podcast.link}
                        className="text-zinc-600 underline hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-500"
                        rel="noreferrer"
                      >
                        {podcast.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className=" mb-4 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  Blogs I read
                </h2>
                <ul className="list-inside list-disc ">
                  {Blogs.map((blog) => (
                    <li key={blog.name}>
                      <a
                        href={blog.link}
                        className="text-zinc-600 underline hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-500"
                        rel="noreferrer"
                      >
                        {blog.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className=" mb-4 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  People with unique perspectives I follow
                </h2>
                <ul className="list-inside list-disc ">
                  {PeopleWorthFollowingOnTwitter.map((people) => (
                    <li key={people.name}>
                      <a
                        href={people.link}
                        className="text-zinc-600 underline hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-500"
                        rel="noreferrer"
                      >
                        {people.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {randomQuote && (
                <Quote
                  quote={randomQuote.content}
                  author={randomQuote.author}
                />
              )}
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
