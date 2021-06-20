import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.10fr 1fr 0.10fr;
  text-align: center;
  max-heigth: 100%;
`

export const ContainerColor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
export const ContainerForm= styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr; 
`
export const Inputs =  styled.input`
  display: inline-flex;
  width: 300px;
  height: 35px;
  margin: 10px;
`
export const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid black;
`
export const RedeSocialButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
  padding: 10px 10px;
  background-color: cornflowerblue;
  border-radius: 5%;
  width: 150px;
  height: 40px;
  justify-content: flex-end;
  font-size: 18px;
  font-family: Jost;
  color: white;
  
  `
export const CriarButton = styled.button`
  display: flex;
  width: 114px;
  height: 31px;
  background-color: #32B768;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  margin: 28px;
  justify-self: center;
  padding: 5px 12px;
  color: white;
`
export const Label =  styled.h3`
  display: flex;
  font-size: 20px;
  font-family: Jost;
  flex-direction: column;

`