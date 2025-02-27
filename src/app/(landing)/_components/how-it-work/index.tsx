
type Props = {}

const HowItWork = (props: Props) => {
  return(
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to unlock the content of any video
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-card text-card-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Paste Video URL</h3>
            <p className="text-sm text-muted-foreground text-center">
              Simply paste the URL of your YouTube, Facebook, or Vimeo video
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-card text-card-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">AI Processing</h3>
            <p className="text-sm text-muted-foreground text-center">
              Our AI analyzes the video, generating a transcript and summary
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-card text-card-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Get Results</h3>
            <p className="text-sm text-muted-foreground text-center">
              View the transcript, summary, and translations in Tigrinya or Amharic
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork