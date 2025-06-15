import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: none;
  height: 280px;
  margin: 0 auto; /* centraliza em telas maiores */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 1441px) {
    height: 400px; /* altura maior em telas maiores */
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const TextoTipo = styled.h4`
  position: absolute;
  top: 8px;
  left: 170px;
  font-family: Roboto;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: #ffffff;

  @media (min-width: 1440px) {
    left: 450px;
  }

  @media (max-width: 1024px) {
     left: 100px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 100px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    top: 15px;
    left: 56px;
    font-size: 16px;
  }
`;

export const TextoTitulo = styled.h2`
  position: absolute;
  top: 180px;
  left: 170px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    left: 450px;
  }

  @media (max-width: 1024px) {
     left: 100px;
  }

  @media (max-width: 768px) {
    top: 140px;
    left: 100px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    top: 110px;
    left: 56px;
    font-size: 20px;
  }
`;
