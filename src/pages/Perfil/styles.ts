// src/pages/Perfil/styles.ts
import styled from 'styled-components';

interface Props {
  carrinhoAberto: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Define 3 colunas de igual largura */
  grid-template-rows: auto auto; /* Define pelo menos 2 linhas automáticas */
  gap: 20px; /* Espaçamento entre os cards */
  width: 90%; /* Ocupa 90% da largura da tela para centralizar */
  max-width: 1200px; /* Largura máxima para evitar que se estenda demais */
  margin: 50px auto; /* Centraliza horizontalmente com margens superior e inferior */
  background-color: #f8f9fa;
  opacity: ${(props) => (props.carrinhoAberto ? 0.5 : 1)}; /* Opacidade ajustável */
  transition: opacity 0.3s ease;
  justify-items: center; /* Centraliza os itens horizontalmente dentro de cada célula da grid */
  align-items: center; /* Centraliza os itens verticalmente dentro de cada célula da grid */

  /* Responsividade */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
    width: 90%;
    margin: 20px auto;
    gap: 15px;
  }

  /* Para telas entre 768px e 1024px (tablets) */
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adaptável para tablets */
    width: 95%;
    margin: 30px auto;
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

export const Header = styled.header`
  width: 100%;
  max-width: 1366px;
  height: auto; /* Altura automática para se adaptar ao conteúdo */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px; /* Padding menor em telas menores */
  background-color: #fff;
  flex-direction: row; /* Garante que os itens fiquem em linha */

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os itens em telas menores */
    align-items: flex-start; /* Alinha à esquerda em telas menores */
    padding: 10px 15px;
    height: auto; /* Ajusta a altura automaticamente */
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: auto;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100px; /* Logo menor em telas pequenas */
  }
`;

export const TextoRestaurante = styled.h1`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  color: #e66767;
  margin-top: 10px;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left; /* Alinha à esquerda em telas pequenas */
  }
`;

export const CarrinhoTexto = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: right;
  color: #e66767;
  margin-top: 10px;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left; /* Alinha à esquerda em telas pequenas */
  }
`;

export const ImagemApresentacao = styled.img`
  width: 100% !important;
  max-width: 1024px !important;
  height: auto !important;
  display: block !important;
  margin: 20px auto !important;
`;

export const ProdutoContainer = styled.div`
  max-width: 1024px;
  margin: 20px auto; /* Margem vertical menor */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Espaçamento menor */

  /* Responsividade */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna em telas menores */
    width: 90%;
  }

  /* Para tablets */
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Certificando-se de que o card ocupe a largura total do container */
  max-width: 300px; /* Limite de largura para que os cards não estiquem muito */
  height: auto;
`;

export const CardImagem = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  max-height: 200px;
`;

export const CardTitulo = styled.h3`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

export const CardDescricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 10px;
`;

export const CardPreco = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: #e66767;
  margin-top: 10px;
`;

export const CardBotao = styled.button`
  padding: 8px 15px;
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
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
