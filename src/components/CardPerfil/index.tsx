// CardPerfil.tsx
import React from 'react'
import { Card, CardImagem, CardTitulo, CardDescricao, CardBotao } from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  aoAbrirModal: () => void
}

const CardPerfil = ({ titulo, descricao, imagem, aoAbrirModal }: Props) => {
  return (
    <Card>
      <CardImagem src={imagem} alt={titulo} />
      <CardTitulo>{titulo}</CardTitulo>
      <CardDescricao>{descricao}</CardDescricao>
      <CardBotao onClick={aoAbrirModal}>Adicionar ao carrinho</CardBotao>
    </Card>
  )
}

export default CardPerfil
