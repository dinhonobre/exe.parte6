import logo from '../../assets/logo.png'
import { HeaderContainer, Title, Carrinho, Logo } from './styles'

const PerfilHeader = () => {
  return (
    <HeaderContainer>
      <Title>Restaurantes</Title>
      <Logo src={logo} alt="efood" />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  )
}

export default PerfilHeader
