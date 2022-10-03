import styled from "styled-components"

export default function Botoes(props){
    return(
        <ContainerBotoes>
        <button onClick={props.naoLembrei}>Não lembrei</button>
        <button onClick={props.quaseNaoLembrei}>Quase não lembrei</button>
        <button onClick={props.zap}>Zap!</button>
    </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: -5px;
button{
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid;
  padding:5px;
}
button:nth-child(1){
  background: #FF3030;
  border-color: #FF3030;
}
button:nth-child(2){
  background: #FF922E;
  border-color: #FF922E;
}
button:nth-child(3){
  background: #2FBE34;
  border-color: #2FBE34;
}
`