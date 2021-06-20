import plants from '../../image/plants.png';
import SearchPlants from '../searchPlants/SearchPlants';
import { Container, ImageHeader, Image, Title, ContainerSearch, ContainerAccount, AccountImg } from './styled'
import contato from '../../image/Icons/google-contacts.svg'

export default function Header() {
    return (
        <Container>
            <ImageHeader>
                    <Image src={ plants } alt="logo árvore" />
            </ImageHeader>
            <ContainerSearch>
                <SearchPlants/>
                <ContainerAccount>
                    <AccountImg src={contato} alt="carrinho"/>
                    <p>Faça seu Login, ou <br/> cadastre-se aqui </p>
                </ContainerAccount> 
            </ContainerSearch>
            <Title>
                <h2>Sobre a Loja</h2>
                <h2>Contato</h2>
            </Title>
        </Container>
    )
}