import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Rocket, Lock, RefreshCcw, Layers } from "lucide-react"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-primary" />
          <span className="sr-only">AI SaaS</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Workflow with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Harness the power of artificial intelligence to streamline your processes, boost productivity, and unlock new possibilities.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Log In</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">Experience unparalleled speed with our cutting-edge AI technology.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg md:col-span-2">
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-gray-500 dark:text-gray-400">Your data is protected with state-of-the-art encryption and privacy measures.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg lg:col-span-2">
                <RefreshCcw className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-500 dark:text-gray-400">Our AI evolves and improves with every interaction, providing you with ever-enhancing results.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg">
                <Layers className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Versatile Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">Seamlessly integrate our AI into your existing workflows and systems.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI SaaS. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
