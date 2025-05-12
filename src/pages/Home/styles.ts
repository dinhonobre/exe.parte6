// src/pages/Home/styles.ts
import styled from 'styled-components';

interface HeroContainerProps {
  backgroundImage: string;
}

export const HeroContainer = styled.div<HeroContainerProps>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;
  position: relative;
  text-align: center;
  overflow: hidden;

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

  /* Responsividade */
  @media (max-width: 768px) {
    height: 200px; /* Reduz a altura da imagem em dispositivos menores */
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: relative;
  margin-top: 36px;
  z-index: 1;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 80px; /* Logo menor em telas pequenas */
    height: 37px;
  }
`;

export const HeroText = styled.h1`
  width: 539px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  color: #E66767;
  margin-top: 150px;
  text-align: center;
  position: relative;
  z-index: 1;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 24px; /* Tamanho da fonte reduzido em telas pequenas */
    width: 90%; /* Largura ajustada para 90% em telas pequenas */
    margin-top: 50px; /* Ajuste de margem superior */
  }
`;
