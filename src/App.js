import logo from "./img/logo.png"
import Footer from "./Footer"
import Perguntas from "./Pergunta"
import styled from "styled-components"
import { useState } from "react"
import certo from "./img/icone_certo.png"
import erro from "./img/icone_erro.png"
import quase from "./img/icone_quase.png"

export default function App(){
const[concluidos, setConcluidos]= useState([]);
const [cardsAbertos, setCardsAbertos] =useState([]);
const [respostasAbertas, setRespostasAbertas] =useState([]);
const [rotacionar, setRotacionar] =useState("rotateY(0deg)");
const [cor, setCor] =useState([]);
const [icone, setIcone] = useState([]);



  function naoLembrei(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      setCor([...cor, '#FF3030'])
      setIcone([...icone, erro])
    }
  }

  function quaseNaoLembrei(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      setCor([...cor, '#FF922E'])
      setIcone([...icone, quase])
    }
  }

  function zap(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      setCor([...cor, '#2FBE34'])
      setIcone([...icone, certo])
    }
  }

    return(
        <ScreenContainer>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>
        <Perguntas icone={icone} cor={cor} cardsAbertos={cardsAbertos} setCardsAbertos={setCardsAbertos} rotacionar={rotacionar} setRotacionar={setRotacionar} concluidos={concluidos} setRespostasAbertas={setRespostasAbertas} respostasAbertas={respostasAbertas}/>
        <Footer numeroConcluidos={concluidos.length} naoLembrei={() =>naoLembrei()} quaseNaoLembrei={() => quaseNaoLembrei()} zap={() => zap()} />
        </ScreenContainer>
    )
}





const ScreenContainer = styled.div `
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img{
    width: 52px;
  }
  h1{
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  }
`