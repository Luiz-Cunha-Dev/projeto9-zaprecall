import styled from "styled-components"

export default function Footer(props){
    return(
        <FooterConcluidos>
            <span data-identifier="flashcard-counter" >{props.numeroConcluidos}/8 concluidos</span>
            <Resutado>
            {props.children}
            </Resutado>
        </FooterConcluidos>
    )
}

const Resutado = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
  height: 23px;
  width: 23px;
  margin-left: 5px;
  margin-top: 5px;
}
`

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

