
import './App.css'
import Title from "@/components/ui/title"
import Intro from "@/components/ui/intro"
import {Hobby1} from "@/components/hobby1.tsx";
import {Hobby2} from "@/components/hobby2.tsx";

function App() {


  return (
      <div>

          <Title/>
          <Intro name1="Craig" name2="Kaito"/>
          <Hobby1/>
          <br/>
          <Hobby2/>
      </div>

  )
}

export default App
