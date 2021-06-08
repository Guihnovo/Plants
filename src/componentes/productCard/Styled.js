import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  background:#F0EDE6;
  max-width: 300px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`
export const PlantName = styled.div`
  display: flex;
  font-family: jost;
  text-align: center;
  background-color: #32B768;
  justify-content: center;
`
export const Button = styled.button`
  width: 120px;
  height: 41px;
  display: revert;
  margin-bottom: 25px;
  background-color: #32B768;
  border-radius: 10px;
`
export const ImgPriceButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  align-items: center;
`
export const Img = styled.img`
  display: flex;
  max-width: 90%;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 205px;
`