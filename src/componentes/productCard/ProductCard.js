import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Img, PlantName, ImgPriceButton, Button} from './Styled'

  export default function ProductCard  ({ produto }) {
  
    return (

      <div>
       <Container>
          <div>
            <PlantName>
                    <h3>{produto.Name}</h3>
            </PlantName>
            <ImgPriceButton>
                <Img src={produto.ImageUrl} alt={produto.Name} />
                <h4>R$ {produto.price},00 </h4>
                <Link to={ `/detalhes/${produto.id}`}>
                    <Button> 
                      Ver planta
                    </Button>
                </Link>
            </ImgPriceButton>
          </div>
        </Container>
      </div>  
    )
  }

