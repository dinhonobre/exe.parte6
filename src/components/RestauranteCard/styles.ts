import styled from 'styled-components'

export const Card = styled.div`
 width: 320px;
  height: 338px;
  width: calc(50% - 20px); /* Ocupa metade da largura com espaçamento */
  max-width: 500px; /* Largura máxima */
  height: auto; /* Altura automática para se ajustar ao conteúdo */
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 20px; /* Adiciona margem inferior entre os cards */

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total em telas menores */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Garante que o card ocupe toda a largura em telas muito pequenas */
  }
`;

export const Imagem = styled.img`
  width: 100%; /* Ocupa a largura total do card */
  height: auto; /* Altura automática para manter a proporção */
  object-fit: cover;
  max-height: 217px; /* Altura máxima da imagem */

  /* Responsividade */
  @media (max-width: 768px) {
    max-height: 180px; /* Ajusta a altura da imagem em telas menores */
  }

  @media (max-width: 480px) {
    max-height: 160px; /* Altura da imagem para telas muito pequenas */
  }
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

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em telas menores */
  }
`;

export const Nota = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e66767;
  display: flex;
  align-items: center;
  gap: 4px;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em telas menores */
  }
`;

export const Descricao = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  padding: 0 16px;
  margin-bottom: auto; /* Empurra o botão para baixo */

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 12px; /* Reduz o tamanho da fonte em telas menores */
  }
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

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 0 12px; /* Ajusta o padding do botão em telas menores */
  }

  @media (max-width: 480px) {
    padding: 0 10px; /* Ajusta ainda mais o padding em telas muito pequenas */
  }
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

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 10px; /* Reduz o tamanho da fonte em telas menores */
    width: 55px; /* Reduz a largura do botão em telas menores */
    height: 24px; /* Ajusta a altura do botão */
  }

  @media (max-width: 480px) {
    font-size: 9px; /* Tamanho ainda menor para telas pequenas */
    width: 50px; /* Ajusta ainda mais a largura */
    height: 22px; /* Ajusta a altura */
  }
`;
