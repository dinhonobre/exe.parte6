import styled from 'styled-components'

interface HeaderContainerProps {
  backgroundImage: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: #FFEBD9;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: -1;
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    height: 150px; /* Menor altura para dispositivos móveis */
    padding: 0 16px; /* Menor espaçamento */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: 120px; /* A altura fica ainda menor em telas muito pequenas */
    padding: 16px 10px; /* Ajuste no padding */
    align-items: center; /* Alinha o conteúdo ao centro */
  }
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  color: #E66767;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px; /* Fonte menor em telas menores */
  }
`

export const Carrinho = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  color: #E66767;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px; /* Fonte menor em telas menores */
  }
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 57.5px;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100px; /* Logo menor em telas menores */
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 80px; /* Logo ainda menor em telas muito pequenas */
    height: 40px;
  }
`
