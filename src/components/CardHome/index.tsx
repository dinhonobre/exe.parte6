import { CardContainer, Imagem, Titulo, Descricao, Botao } from './styles'
import imagemPadrao from '../../assets/imagemPerfil.png'

const ProdutoCard = () => {
  return (
    <CardContainer>
      <Imagem src={imagemPadrao} alt="Pizza Marguerita" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </CardContainer>
  )
}

export default ProdutoCard
