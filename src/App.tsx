import { Button } from "@/components/ui/button"
import FormDemo from "./components/FormDemo"

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Shadcn Button</Button>
      <FormDemo />
    </div>
  )
}

export default App
