
import './App.css'
import Title from "@/components/ui/title"
import Intro from "@/components/ui/intro"
import {Hobby1} from "@/components/hobby1.tsx";

function App() {


  return (
      <div>
          <Title />
          <Intro name1 = "Craig" name2 = "Kaito" />
          <Hobby1/>
      </div>

  )
}

export default App
