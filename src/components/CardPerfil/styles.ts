import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 320px;
  height: 338px;
  background: #e66767;
  border: 1px solid #e66767;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 360px) {
    max-width: 100%;
  }
`;


export const CardImagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CardTitulo = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: #ffebd9;
  margin: 0;
  padding-bottom: 8px;
`;

export const CardDescricao = styled.p`
  font-size: 0.875rem;
  color: #ffebd9;
  margin: 10px 0;
  line-height: 1.4;
  flex-grow: 1;
  overflow-y: auto;
  white-space: normal;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardBotao = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #ffebd9;
  }
`;
