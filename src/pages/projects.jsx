import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoStreamify from '@/images/logos/streamify.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'sithu.ai',
    description:
      'sithu.ai is an AI assistant web application that utilizes natural language processing and AI services like OpenAI and Replicate to provide helpful tools and services through conversation.',
    link: {
      href: 'https://github.com/khantseithu/sithu.ai',
      label: 'https://github.com/khantseithu/sithu.ai',
    },
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Zustand',
      'Stripe',
      'Clerk',
      'MySQL',
      'Shadcn UI',
      'Openai',
      'Replicate',
    ],
    logo: logoPlanetaria,
  },
  {
    name: 'Fashion Fusion',
    description:
      'A feature-rich Fashion Fusion E-Commerce Platform with Admin Dashboard and Storefront, built using Next.js 13, Tailwind, Prisma, MySQL, Clerk, and Stripe, offering multiple vendor/store management, product customization, revenue tracking, and secure payment processing.',
    link: {
      href: 'https://github.com/khantseithu/fashion-fusion',
      label: 'https://github.com/khantseithu/fashion-fusion',
    },
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Zustand',
      'Stripe',
      'Clerk',
      'MySQL',
      'Shadcn UI',
    ],
    logo: logoPlanetaria,
  },
  {
    name: 'GameHub',
    description:
      'A web application designed to help users discover new and exciting video games, featuring advanced filtering, infinite scrolling, and fully type-safe code.',
    link: {
      href: 'https://github.com/khantseithu/game-hub',
      label: 'https://github.com/khantseithu/game-hub',
    },
    tags: [
      'React',
      'TypeScript',
      'Chakra UI',
      'React Query',
      'Zustand',
      'React Router',
      'Rawg.io Api',
    ],
    logo: logoPlanetaria,
  },
  {
    name: 'Wild Oasis',
    description:
      'A custom-built application for managing a small boutique hotel called "Wild Oasis" with 8 luxurious wooden cabins, handling bookings, cabin management, and guest information, serving as an internal application used to check-in guests upon arrival. The backend of the application is built with Supabase.',
    link: {
      href: 'https://github.com/khantseithu/wild-oasis',
      label: 'https://github.com/khantseithu/wild-oasis',
    },
    tags: [
      'React',
      'TypeScript',
      'Styled Components',
      'Supabase',
      'React Query',
      'Rechart',
    ],
    logo: logoOpenShuttle,
  },
  {
    name: 'Tech Mart',
    description:
      ' A full-stack e-commerce web application built with the MERN stack, offering browsing of tech products, user authentication, cart functionality, product rating and reviews, and PayPal integration.',
    link: {
      href: 'https://github.com/khantseithu/TechMart',
      label: 'https://github.com/khantseithu/TechMart',
    },
    tags: [
      'React',
      'Redux Toolkit',
      'RTK Query',
      'Node.js',
      'Express.js',
      'MongoDb',
      'Bootstrap',
    ],
    logo: logoAnimaginary,
  },
  {
    name: 'Streamify',
    description:
      'A music streaming app (Spotify clone) with advanced features including song upload, Stripe payment integration, sleek UI design, responsiveness, authentication, favorites/playlists, and more.',
    link: {
      href: 'https://github.com/khantseithu/streamify',
      label: 'https://github.com/khantseithu/streamify',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    logo: logoStreamify,
  },
  {
    name: 'SummariAi',
    description:
      "A web application utilizing OpenAI's GPT-4 to generate summaries of articles, offering efficient summarization using React.js, Vite.js, Redux Toolkit, and OpenAI's GPT-4.",
    link: {
      href: 'https://github.com/khantseithu/SummariAI',
      label: 'https://github.com/khantseithu/SummariAI',
    },
    tags: ['React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'Tailwind CSS'],
    logo: logoCosmos,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Khant Sithu</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/*<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.length > 0
                  ? project.tags.map((tag) => (
                      <Card.Tags key={tag}>{tag}</Card.Tags>
                    ))
                  : null}
              </div>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
