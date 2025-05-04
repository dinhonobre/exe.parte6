// src/pages/Home/styles.ts
import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: rgb(236, 181, 181);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px; /* Altura total da seção hero */
  position: relative;
  text-align: center;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
`;

export const HeroText = styled.h1`
  width: 539px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  color: #fff;
  margin-top: 80px; /* Espaço abaixo do logo */
  text-align: center;
`;
