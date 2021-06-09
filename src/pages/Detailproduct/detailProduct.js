import { 
  Container, 
  ContainerImagem, 
  ContainerInfo, 
  Img, 
  ContainerMiniatura, 
  Miniaturas, 
  InfoPlanta, 
  ContainerTecnico, 
  H2, 
  SpanContainer, 
  Price, 
  H4,
  InfoPlanta2,
  Button,
  InfoPlanta3,
  Frete,
  Inputt,
  ImgMiniaturas,
  ButtonCep,
  Name
} from "./styled"
import africanViolet from '../../image/Plants/african-violet.png';

import product from '../../pages/products/dados'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function DetailProduct() {
  
  const [plants, setPlants] = useState({})
  const pathParams = useParams();
  const products = product.products
  
  useEffect(() => {
    const choosedPlants = products.find((item) => {
     return item.id === Number(pathParams.id)
    })
    setPlants(choosedPlants)
  }, [products, pathParams.id])

  return (
      <Container>
        <ContainerImagem>
          <Miniaturas>
            <Img src={plants && plants.ImageUrl} alt={plants && plants.Name}/>
          </Miniaturas>
          <ContainerMiniatura>
            <Miniaturas>
              <ImgMiniaturas src={plants && plants.Image2} alt={plants && plants.Name}/>
            </Miniaturas>
            <Miniaturas>
              <ImgMiniaturas src={plants && plants.Image3} alt={plants && plants.Name}/>
            </Miniaturas>
            <Miniaturas>
              <ImgMiniaturas src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
            <Miniaturas>
              <ImgMiniaturas src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
          </ContainerMiniatura>
        </ContainerImagem>
  
        <ContainerInfo>
          <InfoPlanta>
            <Name>{plants && plants.Name}</Name>
            <H4>Frete grátis</H4>
          </InfoPlanta>
          <InfoPlanta2>
            <Price>R$ {plants && plants.price},00</Price>
            <h4>em até 10x sem juros no cartão de crédito</h4>
            <div>
              <Button>COMPRAR</Button>
            </div>
          </InfoPlanta2>
          <InfoPlanta3>
            <Frete>Calcular frete</Frete>
            <Inputt placeholder="DIGITE O CEP"></Inputt> <ButtonCep>OK</ButtonCep>
          </InfoPlanta3>
        </ContainerInfo>
        <ContainerTecnico>
          <H2> Sobre a Planta </H2>
          <SpanContainer>
            <span>{plants && plants.Description}</span>
          </SpanContainer>
          <SpanContainer>
            <table width="100%">
              <h5>Nome: {plants && plants.Name}</h5>
              <h5>Familia: {plants && plants.Family}</h5>
              <h5>Altura: {plants && plants.Altura}</h5>
              <h5>Quantidade disponível: {plants && plants.Quantidade}</h5>
            </table>
          </SpanContainer>
        </ContainerTecnico>  
      </Container>
  )
}