// src/pages/Home/styles.ts
import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color:#FFEBD9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px; /* Altura base para telas maiores */
  position: relative;
  text-align: center;

  /* Estilos para telas menores (celulares) */
  @media (max-width: 768px) {
    height: 200px; /* Altura menor para telas de celular */
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;

  /* Estilos para telas menores (celulares) */
  @media (max-width: 768px) {
    width: 80px;
    height: 37px;
    top: 20px;
  }
`;

export const HeroText = styled.h1`
  width: 539px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  color:#E66767;
  margin-top: 80px;
  text-align: center;

  /* Estilos para telas menores (celulares) */
  @media (max-width: 768px) {
    font-size: 24px; /* Fonte menor para caber em telas de celular */
    width: 90%; /* Largura para ocupar a maioria da tela */
    margin-top: 50px; /* Espaçamento menor abaixo do logo */
  }
`;