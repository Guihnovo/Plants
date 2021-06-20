import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    background-color: #32B768;
    max-height:22vh;
    min-width: 100vw;
`
export const ImageHeader = styled.div`
    display: flex;
    text-align: center;
    padding-left: 41px;
    margin: 10px 10px;
`
export const ContainerSearch = styled.div`
    display: flex;
    margin-top: 20px;
`
export const ContainerAccount = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 23px;
    justify-content: end;
    column-gap: 15px;
    padding-top: 40px; 
`

export const AccountImg = styled.img`
    width: 20%;
`
export const Image = styled.img`
    width: 20%;
`
export const Title = styled.div`
    font-family: Jost;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: 20px;
    padding-left: 20px;
`
