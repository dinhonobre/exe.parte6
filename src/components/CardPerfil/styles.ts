import styled from 'styled-components'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background: #E66767;
  border: 1px solid #e66767;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0; /* evita que encolha */
`;

export const CardDescricao = styled.p`
  font-size: 0.875rem; /* 14px */
  color: #FFEBD9;
  margin: 10px 0;
  line-height: 1.4;
  flex-grow: 1;       /* ocupa o espaço disponível */
  overflow-y: auto;   /* adiciona scroll vertical se texto for maior */
  white-space: normal;

  /* Esconde a barra de rolagem vertical */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const CardBotao = styled.button`
  width: 100%;
  padding: 8px; /* maior para melhor clique */
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`;


export const CardTitulo = styled.h3`
  font-size: 1.125rem; /* 18px */
  font-weight: bold;
  color: #FFEBD9;
  margin: 0;
  padding-bottom: 8px;
`

export const Categoria = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  min-width: 61px;
  height: 26px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 0.75rem; /* 12px */
  background-color: #e66767;
  color: #ffebd9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 8px;
  line-height: 1;
`
