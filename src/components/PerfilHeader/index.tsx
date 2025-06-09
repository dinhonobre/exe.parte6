import logo from '../../assets/logo.png'
import {
  HeaderContainer,
  Title,
  Carrinho,
  Logo,
  ContentWrapper // importa o ContentWrapper
} from './styles'
import fundo from '../../assets/fundo.png'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const PerfilHeader = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  return (
    <HeaderContainer backgroundImage={fundo}>
      <ContentWrapper>
        <Title>Restaurantes</Title>
        <Logo src={logo} alt="efood" />
        <Carrinho>{itensCarrinho.length} produto(s) no carrinho</Carrinho>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default PerfilHeader
