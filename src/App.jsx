
import { Home } from "./Components/Home"


import styled from "styled-components"

const Centraldiv = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
`



function App() {

  return (
    <Centraldiv>
    <Home />
    </Centraldiv>
  )
}

export default App
