import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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
export const Image = styled.img`
    width: 25%;
`
export const Title = styled.div`
    font-size: 21px;
    font-family: Jost;
    display: block;
    justify-self: flex-end;
    padding-right: 60px;
`
