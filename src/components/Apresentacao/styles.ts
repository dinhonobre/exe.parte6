import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1366px;
  height: 280px;
  margin-top: 0px; /* para respeitar o top 162px do layout geral */

  @media (max-width: 1400px) {
    width: 100%; /* responsivo para telas menores */
  }

  img {
    width: 100%;
    height: 280px; /* altura fixa da imagem */
    object-fit: cover;
    display: block;
  }
`;

export const TextoTipo = styled.h4`
  position: absolute;
  top: 8px;
  left: 170px;
  font-family: "Roboto Thin", "Roboto", sans-serif;
  font-weight: 100;
  font-size: 32px;
  letter-spacing: 0%;
  line-height: 100%;
  color: rgba(255, 255, 255, 0.8); /* branco com opacidade 80% */

  @media (max-width: 768px) {
    top: 20px;
    left: 30px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    top: 15px;
    left: 20px;
    font-size: 16px;
  }
`;

export const TextoTitulo = styled.h2`
  position: absolute;
  top: 180px;
  left: 170px;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 32px; 

  @media (max-width: 768px) {
    top: 140px;
    left: 30px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    top: 110px;
    left: 20px;
    font-size: 20px;
  }
`;
