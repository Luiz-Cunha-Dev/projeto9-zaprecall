import setaPlay from "./img/seta_play.png"
import setaVirar from "./img/seta_virar.png"
import styled from "styled-components"
import dados from "./dados";
import { useState } from "react";

export default function Perguntas(){

  const [cardsAbertos, setCardsAbertos] =useState([]);
  const [respostasAbertas, setRespostasAbertas] =useState([]);

  function verPergunta(index){
    if(!cardsAbertos.includes(index)){
      setCardsAbertos([...cardsAbertos, index])
    }
    console.log(cardsAbertos)
  }

  function verResposta(index){
    if(!respostasAbertas.includes(index)){
      setRespostasAbertas([...respostasAbertas, index])
    }
    console.log(respostasAbertas)
  }

  return(
    <>
    {dados.map((d, index) => 
    <Pergunta key={index}  numero={d.numero}
     resposta={d.resposta} abrirPergunta={() => verPergunta(index)}
     abrirResposta={() => verResposta(index)}>
      {cardsAbertos.includes(index) ? <span>{d.pergunta}</span> : ""}
    
     </Pergunta>)
     }
    </>
  )
}


function Pergunta(props){
    return(
        <>
        <PerguntaFechada>
            <span>{props.numero}</span>
            <img onClick={props.abrirPergunta} src={setaPlay} alt="play"  />
        </PerguntaFechada>
        <PerguntaAberta>
            {props.children}
            <img onClick={props.abrirResposta} src={setaVirar} alt="virar" />
        </PerguntaAberta>
        </>
    )
}




const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform-style: preserve-3d;
    transition: all .5s;
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
`

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
`