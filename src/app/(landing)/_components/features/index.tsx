import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileSearch, ImportIcon as Translate } from "lucide-react"

type Props = {}

const Features = (props: Props) => {
  return(
    <section id="features" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock the power of video content with our advanced AI-powered tools
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 mb-2" />
              <CardTitle>Accurate Transcription</CardTitle>
              <CardDescription>
                Get precise transcripts for videos from YouTube, Facebook, and Vimeo
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <FileSearch className="h-10 w-10 mb-2" />
              <CardTitle>Smart Summarization</CardTitle>
              <CardDescription>AI-generated summaries capturing key points and insights</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Translate className="h-10 w-10 mb-2" />
              <CardTitle>Multilingual Translation</CardTitle>
              <CardDescription>Translate content to Tigrinya and Amharic with cultural context</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Features