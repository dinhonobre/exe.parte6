import React from 'react'
import { Container, TextoTipo, TextoTitulo } from './styles'
import imagemApresentacao from '../../assets/apresentacao.png'

const Apresentacao = () => (
  <Container>
    <TextoTipo>Italiana</TextoTipo>
    <TextoTitulo>La Dolce Vita Trattoria</TextoTitulo>
    <img src={imagemApresentacao} alt="Imagem de Apresentação" />
  </Container>
)

export default Apresentacao
