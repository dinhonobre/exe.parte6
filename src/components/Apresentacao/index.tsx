import React from 'react'
import { Container, TextoTipo, TextoTitulo } from './styles'

type Props = {
  tipo: string
  nome: string
  capa: string   // adiciona a prop imagem
}

const Apresentacao = ({ tipo, nome, capa }: Props) => (
  <Container>
    <TextoTipo>{tipo}</TextoTipo>
    <TextoTitulo>{nome}</TextoTitulo>
    <img src={capa} alt={`Imagem de ${nome}`} />
  </Container>
)

export default Apresentacao
