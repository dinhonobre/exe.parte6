import styled from 'styled-components'

export const Card = styled.div`
  width: calc(50% - 20px); /* Ocupa metade da largura com espaçamento */
  max-width: 500px; /* Largura máxima */
  height: auto; /* Altura automática para se ajustar ao conteúdo */
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 20px; /* Adiciona margem inferior entre os cards */

  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total em telas menores */
  }
`;

export const Imagem = styled.img`
  width: 100%; /* Ocupa a largura total do card */
  height: auto; /* Altura automática para manter a proporção */
  object-fit: cover;
  max-height: 217px; /* Altura máxima da imagem */
`;

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const Titulo = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e66767;
`;

export const Nota = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e66767;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Descricao = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  padding: 0 16px;
  margin-bottom: auto; /* Empurra o botão para baixo */
`;

export const Botao = styled.button`
  width: auto; /* Largura automática para se ajustar ao texto */
  height: 24px;
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  border: none;
  border-radius: 4px;
  margin: 16px;
  align-self: flex-start;
  cursor: pointer;
  text-align: center;
  padding: 0 16px; /* Adiciona padding horizontal para mais espaço interno */
`;

export const Estrela = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 4px;
`;

export const Categoria = styled.span`
  position: absolute;
  width: 61px;
  height: 26px;
  top: 10px;
  right: 10px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  background-color: #e66767;
  color: #ffebd9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
