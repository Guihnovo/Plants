import ProductCard from '../../componentes/productCard/ProductCard'
import SearchPlants from '../../componentes/searchPlants/SearchPlants'
import { Container, ContainerProduct} from "./styled"
import product from './dados'
import Category from '../../componentes/Category/category'

  export default function GetProducts () {

    const pegarProdutos = product.products
    console.log(pegarProdutos)
 
    const AddPlant = () => {
      
      let seePlant = pegarProdutos.find((item) => {
        return item.id === item.id 
      })
  
      let seePlant2 = pegarProdutos.findIndex((item) => {
        return item.id === item.id;
    })
       
  }
    
   
  
  return (

      <Container>
        <Category/>
        <ContainerProduct>
        {pegarProdutos.map((produto) =>  (
          <ProductCard 
          produto={produto}
          seePlants={() => AddPlant()}
          />
          ))}
        </ContainerProduct>
      </Container>
  )
}

