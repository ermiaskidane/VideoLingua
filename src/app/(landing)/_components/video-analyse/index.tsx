import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const VideoAnalayse = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Video Analysis Demo</h2>
            <p className="text-muted-foreground">See how our service works with this example video</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Video Information</CardTitle>
              <CardDescription>YouTube video: "Introduction to Machine Learning"</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/f_uwKZIAeM0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="transcript">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="translation">Translation</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript">
              <Card>
                <CardHeader>
                  <CardTitle>Video Transcript</CardTitle>
                  <CardDescription>Full transcript of the video content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    readOnly
                    className="min-h-[200px]"
                    value="Welcome to this introduction to machine learning. In this video, we'll cover the basics of what machine learning is, its applications, and why it's becoming increasingly important in today's world. Machine learning is a subset of artificial intelligence..."
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Copy Transcript</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="summary">
              <Card>
                <CardHeader>
                  <CardTitle>Video Summary</CardTitle>
                  <CardDescription>Concise summary of the main points</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    readOnly
                    className="min-h-[200px]"
                    value="This video provides an introduction to machine learning, covering:
1. Definition of machine learning as a subset of AI
2. Key applications in various industries
3. Importance of machine learning in modern technology
4. Basic concepts of supervised and unsupervised learning
5. Overview of the machine learning process"
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Copy Summary</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="translation">
              <Card>
                <CardHeader>
                  <CardTitle>Translated Content</CardTitle>
                  <CardDescription>Translation of the transcript or summary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tigrinya">Tigrinya</SelectItem>
                      <SelectItem value="amharic">Amharic</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    readOnly
                    className="min-h-[200px]"
                    value="እንቋዕ ብደሓን መጻእኩም ናብዚ መእተዊ ናይ ማሽን ለርኒንግ። ኣብዚ ቪድዮ፡ ማሽን ለርኒንግ እንታይ ምዃኑ፡ ኣገባብ ኣጠቓቕምኡን ኣብዚ እዋን እዚ ኣገዳስነቱ እናወሰኸ ዝኸይድ ዘሎ ስለምንታይ ምዃኑን ክንርኢ ኢና። ማሽን ለርኒንግ ክፋል ናይ ሰብ-ሰራሕ ኣእምሮ (ኣርቲፊሻል ኢንተሊጀንስ) እዩ..."
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Copy Translation</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default VideoAnalayse