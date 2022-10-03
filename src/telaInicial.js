import styled from "styled-components"
import logo from "./img/logo.png"

export default function TelaInicial(props){



    return(
        <ContainerInicial valor={props.valor}>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={props.abrirApp} >Iniciar Recall!</button>
        </ContainerInicial>
    )
}


const ContainerInicial = styled.div`
background: #FB6B6B;
z-index: 1;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: ${props => props.valor};
flex-direction: column;
align-items: center;
img{
    margin-top: 146px;
}
h1{
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-top: 13px;
  margin-bottom: 30px;
  }
button{
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #D70900;
width: 246px;
height: 54px;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
}
`

