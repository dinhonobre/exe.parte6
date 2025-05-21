import React from 'react'
import { Container, TextoTipo, TextoTitulo } from './styles'
import imagemApresentacao from '../../assets/apresentacao.png'

type Props = {
  tipo: string
  nome: string
}

const Apresentacao = ({ tipo, nome }: Props) => (
  <Container>
    <TextoTipo>{tipo}</TextoTipo>
    <TextoTitulo>{nome}</TextoTitulo>
    <img src={imagemApresentacao} alt="Imagem de Apresentação" />
  </Container>
)

export default Apresentacao
