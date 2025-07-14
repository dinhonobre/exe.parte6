// src/pages/Perfil/styles.ts
import styled from "styled-components";

interface Props {
  carrinhoAberto: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background: #fff8f2;
  opacity: ${(props) => (props.carrinhoAberto ? 0.5 : 1)};
  transition: opacity 0.3s ease;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
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
  width: 100%;
  max-width: 1024px;
  margin: 56px auto;
  background: #fff8f2;

  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: center;
  padding: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 32px 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    margin-top: 32px;
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
