import setaPlay from "./img/seta_play.png"
import setaVirar from "./img/seta_virar.png"
import styled from "styled-components"
import dados from "./dados";

export default function Perguntas(props){

  const {respostasAbertas,setRespostasAbertas, cardsAbertos, setCardsAbertos, concluidos, rotacionar, setRotacionar, cor, icone} = props



  function verPergunta(index){
    if(!cardsAbertos.includes(index) && !concluidos.includes(index)){
      setCardsAbertos([...cardsAbertos, index])
      setRotacionar("rotateY(180deg)")
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
    botao={respostasAbertas.includes(index) ? "" : setaVirar}
     resposta={d.resposta} 
     abrirPergunta={(cardsAbertos[cardsAbertos.length-1] === concluidos[concluidos.length-1]) ? () => verPergunta(index): ""}
     margin={cardsAbertos.includes(index) && !concluidos.includes(index) ? "65" : ""}
     rotacao={cardsAbertos.includes(index) && !concluidos.includes(index) ? rotacionar : ""}
     cor={concluidos.includes(index) ? cor[index] : "#333333"}
     risco={cardsAbertos.includes(index) ? "line-through" : ""}
     icone={concluidos.includes(index) ? icone[index] : setaPlay}
     >
      {(cardsAbertos.includes(index) && !respostasAbertas.includes(index)) ? <span>{d.pergunta}</span> : ""}
      {respostasAbertas.includes(index) ? <span>{d.resposta}</span> : ""}
      {!respostasAbertas.includes(index) ? <img onClick={() => verResposta(index)} src={setaVirar} alt="virar" /> : ""}
     </Pergunta>)
     }
    </>
  )
}


function Pergunta(props){
    return(
        <Carta margin={props.margin} rotacao={props.rotacao}>
        <PerguntaFechada cor={props.cor} risco={props.risco}>
            <p>{props.numero}</p>
            <img onClick={props.abrirPergunta} src={props.icone} alt="play"  />
        </PerguntaFechada>
        <PerguntaAberta >
            {props.children}  
        </PerguntaAberta>
        </Carta>
    )
}

const Carta = styled.div`
    display:flex;
    position: relative;
    transform-style: preserve-3d;
    transition: all .5s;
    margin-bottom: ${props => `${props.margin}px`}; 
    transform: ${props => props.rotacao}; 
`


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
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.cor};
  text-decoration: ${props => props.risco};
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
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility:hidden;
  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
`