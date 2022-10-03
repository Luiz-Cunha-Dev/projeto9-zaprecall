import logo from "./img/logo.png"
import Footer from "./Footer"
import Perguntas from "./Pergunta"
import styled from "styled-components"
import { useState } from "react"
import certo from "./img/icone_certo.png"
import erro from "./img/icone_erro.png"
import quase from "./img/icone_quase.png"
import TelaInicial from "./telaInicial"

export default function App(){
const[concluidos, setConcluidos]= useState([]);
const [cardsAbertos, setCardsAbertos] =useState([]);
const [respostasAbertas, setRespostasAbertas] =useState([]);
const [rotacionar, setRotacionar] =useState("rotateY(0deg)");
const [cor, setCor] =useState(["", "", "", "", "", "", "", ""]);
const [icone, setIcone] = useState(["", "", "", "", "", "", "", ""]);
const [resultado, setResutado] = useState([]);
let novaCor;
let novoIcone;


  function naoLembrei(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      novaCor= [...cor]
      novaCor[respostasAbertas[respostasAbertas.length-1]]='#FF3030'
      setCor(novaCor)
      novoIcone= [...icone]
      novoIcone[respostasAbertas[respostasAbertas.length-1]]= erro
      setIcone(novoIcone)
      setResutado([...resultado, erro])
    }
  }

  function quaseNaoLembrei(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      novaCor= [...cor]
      novaCor[respostasAbertas[respostasAbertas.length-1]]='#FF922E'
      setCor(novaCor)
      novoIcone= [...icone]
      novoIcone[respostasAbertas[respostasAbertas.length-1]]= quase
      setIcone(novoIcone)
      setResutado([...resultado, quase])
    }
  }

  function zap(){
    if(concluidos[concluidos.length-1] !== respostasAbertas[respostasAbertas.length-1] && concluidos.length < 8 && cardsAbertos[cardsAbertos.length-1] === respostasAbertas[respostasAbertas.length-1]){
      setConcluidos([...concluidos, respostasAbertas[respostasAbertas.length-1]])
      setRotacionar("rotateY(0deg)")
      novaCor= [...cor]
      novaCor[respostasAbertas[respostasAbertas.length-1]]='#2FBE34'
      setCor(novaCor)
      setIcone([...icone, certo])
      novoIcone= [...icone]
      novoIcone[respostasAbertas[respostasAbertas.length-1]]= certo
      setIcone(novoIcone)
      setResutado([...resultado, certo])
    }
  }


  const [valor, setValor] = useState("flex")

  function abrirApp(){
      setValor("none")
  }

    return(
        <ScreenContainer>
          <TelaInicial abrirApp={() => abrirApp()} valor={valor}/>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>
        <Perguntas naoLembrei={() =>naoLembrei()} quaseNaoLembrei={() => quaseNaoLembrei()} zap={() => zap()}  icone={icone} cor={cor} cardsAbertos={cardsAbertos} setCardsAbertos={setCardsAbertos} rotacionar={rotacionar} setRotacionar={setRotacionar} concluidos={concluidos} setRespostasAbertas={setRespostasAbertas} respostasAbertas={respostasAbertas}/>
        <Footer numeroConcluidos={concluidos.length} >
          {resultado.map((r, index) => <img src={r} key={index} alt={r}/>)}
        </Footer>
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