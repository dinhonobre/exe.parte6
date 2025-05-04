// src/components/Rodape/index.tsx
import { FooterContainer, Logo, SocialIcons, FooterText } from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram-icon.png'
import twitter from '../../assets/twitter-icon.png'

const Rodape = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo efood" />
      <SocialIcons>
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </SocialIcons>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  )
}

export default Rodape
