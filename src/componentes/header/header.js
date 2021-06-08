import React from 'react';
import plants from '../../image/plants.png';
import { Container, ImageHeader, Image, Title } from './styled'

export default function Header() {
    return (
        <Container>
            <ImageHeader>
                <Image src={ plants } alt="logo árvore" />
            </ImageHeader>
            <Title>
                <h2>Sobre a Loja</h2>
                <h2>Contato</h2>
            </Title>
        </Container>
    )
}