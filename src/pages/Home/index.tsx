import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { HeroContainer, HeroText, Logo } from './styles'
import Listagem from '../../components/Listagem'
import Rodape from '../../components/Footer'

const Home = () => (
  <>
    <HeroContainer>
      <Logo src={logo} alt="Logo" />
      <HeroText>
        Viva experiências gastronômicas
        no conforto da sua casa
      </HeroText>
    </HeroContainer>
    <Listagem />
    <Rodape />
    {/* Link para acessar o Perfil */}
    <Link to="/perfil">Ir para o Perfil</Link>
  </>
)

export default Home
