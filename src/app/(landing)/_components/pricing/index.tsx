import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for you
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="bg-background dark:bg-muted">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For occasional use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$9.99</div>
              <p className="text-sm text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>5 videos per month</li>
                <li>Transcription & Summarization</li>
                <li>Translation to 1 language</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-background dark:bg-muted">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For regular content creators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$24.99</div>
              <p className="text-sm text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>20 videos per month</li>
                <li>Transcription & Summarization</li>
                <li>Translation to both languages</li>
                <li>Priority processing</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-background dark:bg-muted">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large-scale needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">Custom</div>
              <p className="text-sm text-muted-foreground">Contact us for pricing</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Unlimited videos</li>
                <li>Advanced analytics</li>
                <li>API access</li>
                <li>Dedicated support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Pricing