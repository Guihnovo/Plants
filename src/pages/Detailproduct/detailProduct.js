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
  Inputt
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
      if(item.id === pathParams.name){
        return item
      } 
      return item
    })
    console.log(choosedPlants)
    setPlants(choosedPlants)
  }, [products, pathParams.name])


  return (
      <Container>
        <ContainerImagem>
          <Miniaturas>
            <Img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/Planta-para-dentro-de-casa-violeta.jpg" alt="Flor chamada violeta"/>
          </Miniaturas>
          <ContainerMiniatura>
            <Miniaturas>
              <img src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
            <Miniaturas>
              <img src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
            <Miniaturas>
              <img src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
            <Miniaturas>
              <img src={africanViolet} alt="Ilustração violeta flor"/>
            </Miniaturas>
          </ContainerMiniatura>
        </ContainerImagem>
       
        <ContainerInfo>
          <InfoPlanta>
            <h3>MAÇÃ JULIETA P/ VASOS - MUDA ENXERTADA - PRODUZ EM VASOS E CLIMAS QUENTES</h3>
            <H4>Frete gratis</H4>
          </InfoPlanta>
          <InfoPlanta2>
            <Price>R$99,00</Price>
            <h4>em até 10x sem juros no cartão de crédito</h4>
            <div>
              <Button>COMPRAR</Button>
            </div>
          </InfoPlanta2>
          <InfoPlanta3>
            <h2>Calcular frete</h2>
            <Inputt placeholder="DIGITE O CEP"></Inputt> <button>OK</button>
          </InfoPlanta3>
        </ContainerInfo>
        <ContainerTecnico>
          <H2> Informações da Planta </H2>
          <SpanContainer>
            <span>Viola é um gênero botânico pertencente à família Violaceae. Inclui várias espécies popularmente conhecidas como violetas e amores-perfeitos.</span>
          </SpanContainer>
          <SpanContainer>
            <table width="100%" border="1px solid black" border-radius='10px'>
              <h5>Nome: uahsduasdhuashd</h5>
              <h5>Familia: uahsduasdhuashd</h5>
              <h5>Altura: uahsduasdhuashd</h5>
              <h5>Quantidade: uahsduasdhuashd</h5>
              <h5>Nome: uahsduasdhuashd </h5>
            </table>
          </SpanContainer>
        </ContainerTecnico>
        <>
         
        </>
       
  
      </Container>
      
      
      
  )
}