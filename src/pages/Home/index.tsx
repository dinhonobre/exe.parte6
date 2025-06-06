import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HomeContainer, HeroContainer, HeroText, Logo } from './styles';
import Listagem from '../../components/Listagem';
import Rodape from '../../components/Footer';
import fundo from '../../assets/fundo.png';

const Home = () => (
  <HomeContainer>
    <HeroContainer backgroundImage={fundo}>
      <Logo src={logo} alt="Logo" />
      <HeroText>
        Viva experiências gastronômicas
        no conforto da sua casa
      </HeroText>
    </HeroContainer>
    <Listagem />
    <Rodape />
  </HomeContainer>
);

export default Home;
