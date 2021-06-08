import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  padding: 20px;
  justify-items: center;
  border-radius: 5px;
  border: 1px solid black;
  margin: 20px;
  background-color: #F6F6F6;
`

export const ContainerImagem = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  column-gap: 10px;
  justify-items: center;
  border-radius: 5px;
  background-color: white;
`
export const Img = styled.img`
  max-width: 95%;
  margin: 10px;
  display: block;
`
export const ContainerMiniatura = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10px;
  column-gap: 15px;
`
export const Miniaturas = styled.div`
  border: 1px solid black;
  border-radius: 5px;  
`
export const ContainerInfo = styled.div`
  display: grid;
  grid-template-row: 60px 1fr 1fr;
  column-gap: 10px;
  justify-items: center;
  background-color: white;
`
export const InfoPlanta = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: flex-start;
  border-bottom: ridge;
  align-items: center;
`
export const InfoPlanta2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  align-items: center;
`
export const InfoPlanta3 = styled.div`
  display: block;
`
export const Price = styled.h3`
  font-size: 30px;
  font-family: jost;
  font-weight: bold;
`
export const H4  = styled.h4`
  font-size: 22px;
  padding: 5px 11px;
  text-align: left;
  margin: 0px 15px;
  background: lightgreen;
  border-radius: 5px;
`

export const Button = styled.button`
  background-color: #32B768;
  font-family: Jost;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 20px;  
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 5px;
`
export const ContainerTecnico = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 43px;
  padding-left: 53px;
`

export const Inputt = styled.input`
  width: 16rem;
  height: 2rem;
  margin-right: 20px;
`
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 26px;
  padding: 20px 0px 10px 10px;
  text-family: Jost;
  color: rgb(102, 102, 102);
`
export const SpanContainer = styled.span`
  background: rgb(255, 255, 255);
  word-break: break-word;
  padding: 30px 15px 15px;
  font-size: 14px;
  color: rgb(102, 102, 102);
`