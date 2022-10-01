import styled from "styled-components"

export default function Footer(){
    return(
        <FooterConcluidos>
            <ContainerBotoes>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </ContainerBotoes>
            <span>0/4 concluidos</span>
        </FooterConcluidos>
    )
}


const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 20px;
  margin-top: 10px;
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