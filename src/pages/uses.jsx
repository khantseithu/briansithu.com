import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="M4 MacBook Pro">
              The perfect balance of power and portability. The performance of
              it is just insane.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I don’t care what anyone says, VS Code is the best code editor.
            </Tool>
            <Tool title="Warp">
              Great terminal replacement for macOS. Written in Rust, so it’s
              fast and has a lot of great features.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
            <Tool title="Postman">
              The best way to test APIs. I use it every day.
            </Tool>
            <Tool title="MongoDB Compass">
              Great GUI for working with MongoDB. I use it all the time.
              Aggregations are a breeze.
            </Tool>
            <Tool title="Brave">
              My browser of choice. I love the privacy features and the built-in
              ad blocker. Chromium-based, so it’s fast.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              The best design tool out there. I use it for everything from
              wireframes to high-fidelity mockups.
            </Tool>
            <Tool title="Excalidraw">
              Great for quick wireframes or diagrams. I use it all the time to
              sketch out ideas.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="GitHub Copilot">
              The AI pair programmer, which makes me a 10x developer.
            </Tool>
            <Tool title="Perplexity">
              Great AI search engine for quickly finding things.
            </Tool>
            <Tool title="Apple Notes">
              I’ve tried every note-taking app under the sun and I always come
              back to Apple Notes. It’s just the best.
            </Tool>
            <Tool title="Look Away">
              A simple app that reminds you to look away from your screen every
              20 minutes. Great for saving your eyes.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
