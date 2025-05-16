// src/pages/Home/styles.ts
import styled from "styled-components";

interface HeroContainerProps {
  backgroundImage: string;
}

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background:#FFF8F2;

  @media (max-width: 768px) {
    padding: 0 px;
  }
`;



export const HeroContainer = styled.div<HeroContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  width: 100%;
  max-width: 100%;
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
  box-sizing: border-box;

  /* Responsividade */
  @media (max-width: 768px) {
    height: 200px; /* Reduz a altura da imagem em dispositivos menores */
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: relative;
  margin-top: 64px; /* Espaço do topo da imagem até o logo */
  z-index: 1;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 80px;
    height: 37px;
    margin-top: 40px; /* Ajuste para telas pequenas */
  }
`;

export const HeroText = styled.h1`
  width: 539px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  color: #e66767;
  margin-top: 138px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  z-index: 1;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 24px;
    width: 90%;
    margin-top: 20px;
  }
`;
