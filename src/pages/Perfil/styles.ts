// src/pages/Perfil/styles.ts
import styled from "styled-components";

interface Props {
  carrinhoAberto: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100vw;
  background: #FFF8F2;
  opacity: ${(props) => (props.carrinhoAberto ? 0.5 : 1)};
  transition: opacity 0.3s ease;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 15px;
  }

  /* Para telas entre 768px e 1024px (tablets) */
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    ); /* Adaptável para tablets */
    margin: 0 auto;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: background-color 0.3s ease;
`;


export const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px); /* layout fixo para telas grandes */
  gap: 32px;
  padding: 56px 40px;
  width: 100%;
  max-width: 1024px; /* largura conforme Figma */
  margin:0 auto ; /* top: 498px simulando posição */
  background: #fff8f2;
  box-sizing: border-box;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    height: auto; /* altura flexível no mobile */
    margin-top: 64px; /* reduzido para visual harmonioso */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 320px);
    height: auto;
    padding: 40px 24px;
  }

  @media (min-width: 1280px) {
    padding: 56px 6vw;
    justify-content: center;
    grid-template-columns: repeat(3, 320px); /* mantém padrão do Figma */
  }
`;



export const Rodape = styled.footer`
  width: 100%;
  height: auto;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  padding: 15px;
`;

export const RodapeTexto = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  color: #333;
  text-align: center;
`;
