import { Globe } from "lucide-react"

type Props = {}

const Language = (props: Props) => {
  return (
    <section id="languages" className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <Globe className="mr-1 h-4 w-4" />
              <span>Tigrinya</span>
            </div>
            <h3 className="text-2xl font-bold">ትግርኛ (Tigrinya)</h3>
            <p className="text-muted-foreground">
              Tigrinya is an Ethiopic language spoken by about 7 million people, primarily in Eritrea and northern
              Ethiopia. It uses the Ge'ez script and is one of the official languages of Eritrea.
            </p>
            <div className="rounded-lg border bg-card p-4">
              <p className="font-medium">Sample Tigrinya Text:</p>
              <p className="mt-2">ሰላም፡ ከመይ ኣለኻ/ኺ? ናብ ትግርኛ ቋንቋ ትርጉም ኣገልግሎትና እንቋዕ ብደሓን መጻእኩም።</p>
              <p className="mt-2 text-muted-foreground">
                Translation: Hello, how are you? Welcome to our Tigrinya language translation service.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <Globe className="mr-1 h-4 w-4" />
              <span>Amharic</span>
            </div>
            <h3 className="text-2xl font-bold">አማርኛ (Amharic)</h3>
            <p className="text-muted-foreground">
              Amharic is the official language of Ethiopia with over 25 million native speakers. It's the
              second-most spoken Semitic language in the world after Arabic and uses the Ge'ez script.
            </p>
            <div className="rounded-lg border bg-card p-4">
              <p className="font-medium">Sample Amharic Text:</p>
              <p className="mt-2">ሰላም፡ እንዴት ነህ/ሽ? ወደ አማርኛ ቋንቋ ትርጉም አገልግሎታችን እንኳን በደህና መጣችሁ።</p>
              <p className="mt-2 text-muted-foreground">
                Translation: Hello, how are you? Welcome to our Amharic language translation service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Language