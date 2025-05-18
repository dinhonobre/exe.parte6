import logo from '../../assets/logo.png'
import { HeaderContainer, Title, Carrinho, Logo } from './styles'
import fundo from '../../assets/fundo.png'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const PerfilHeader = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  return (
    <HeaderContainer backgroundImage={fundo}>
      <Title>Restaurantes</Title>
      <Logo src={logo} alt="efood" />
      <Carrinho>{itensCarrinho.length} produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  )
}

export default PerfilHeader
