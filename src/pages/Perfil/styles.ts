// src/pages/Perfil/styles.ts
import styled from "styled-components";

interface Props {
  carrinhoAberto: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-column: 1 / -1;
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;
  max-width: 100%; /* Limitar largura máxima para centralizar */
  margin: 0 auto; /* Centraliza horizontalmente */
  background:#FFF8F2;
  opacity: ${(props) =>
    props.carrinhoAberto ? 0.5 : 1}; /* Opacidade ajustável */
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
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    ); /* Adaptável para tablets */
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
  max-width: 100%;
  height: auto; /* Altura automática para se adaptar ao conteúdo */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px; /* Padding menor em telas menores */
  background-color: #fff;
  flex-direction: row; /* Garante que os itens fiquem em linha */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    width: 100%;
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
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
`;

export const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanhos iguais */
  grid-template-rows: repeat(2, auto); /* 2 linhas automáticas */
  gap: 30px 40px;
  margin: 0 auto;
  background: #FFF8F2;
  padding: 48px 8px;
  max-width: 1024px; /* limite de largura */
  width: 100%;
  justify-items: center; /* centraliza cada card dentro da célula */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna no mobile */
    grid-template-rows: auto;
    width: 90%;
  }
`;


export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
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
