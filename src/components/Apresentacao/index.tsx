import React from 'react'
import { Container, Titulo, Tipo } from './styles'
import imagemApresentacao from '../../assets/apresentacao.png'

const Apresentacao = () => (
  <Container>
    <img src={imagemApresentacao} alt="Imagem de Apresentação" />
  </Container>
)

export default Apresentacao
