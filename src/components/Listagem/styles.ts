import { styled } from "styled-components";

export const ListagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px 80px;  /* Espaçamento vertical e horizontal entre cards */
  padding: 80px 16px;
  box-sizing: border-box;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #FFF8F2;
`;

export const RestauranteCard = styled.div`
  width: 472px;
  height: 398px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 80px 48px; /* gap-vertical gap-horizontal */
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%; /* Responsivo, ocupa toda a largura */
    height: auto; /* Ajusta altura automática no mobile */
  }
`;
