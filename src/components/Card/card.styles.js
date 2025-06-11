import styled from "styled-components";
import '../../styles/variables.css'

const StyledDiv = styled.div`
    background-color: ${({color}) => color};
    position: relative;
    width: 300px;
    height: 500px;
    padding: 40px;`

const StyledP = styled.p`
    color: var(--Transparent_white);
    font-size: 15px;
    `

const StyledImg = styled.img`
    display: block;`

const StyledH2 = styled.h2`
    color: var(--Very_light_gray);
    font-size: 30px;`

const StyledButton = styled.button`
    position: absolute;
    bottom: 40px;
    border: none;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    border: solid white 2px;
    font-size: 15px;
    `

export {StyledDiv, StyledH2, StyledP, StyledImg, StyledButton}