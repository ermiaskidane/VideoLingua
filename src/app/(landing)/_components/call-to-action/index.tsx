import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Transcribe, Summarize, and Translate Videos
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Get transcripts, summaries, and translations in Tigrinya and Amharic for YouTube, Facebook, and Vimeo
              videos.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input placeholder="Paste your video URL here" />
              <Button type="submit">Analyze</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction