import styled from 'styled-components'

interface Props {
  carrinhoAberto: boolean
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  grid-template-rows: repeat(3, 1fr); /* 3 linhas */
  gap: 20px; /* Espaçamento entre os cards */
  width: 1024px;
  margin: 50px auto;
  background-color: #f8f9fa;
  opacity: ${(props) => (props.carrinhoAberto ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor escura com opacidade */
  z-index: 1000; /* Coloca o overlay acima de outros conteúdos */
  transition: background-color 0.3s ease;
`;


export const Header = styled.header`
  width: 100%;
  max-width: 1366px;
  height: 186px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
`;

export const Logo = styled.img`
  width: 125px;
  height: auto;
`;

export const TextoRestaurante = styled.h1`
  width: 109px;
  height: 21px;
  position: relative;
  top: 59px;
  left: 171px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  color: #e66767;
`;

export const CarrinhoTexto = styled.h2`
  width: 256px;
  height: 21px;
  position: relative;
  top: 59px;
  left: 939px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: right;
  color: #e66767;
`;

export const ImagemApresentacao = styled.img`
  width: 100% !important;
  max-width: 1024px !important;
  height: auto !important;
  display: block !important;
  margin: 0 auto !important;
`;

export const ProdutoContainer = styled.div`
  max-width: 1024px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardTitulo = styled.h3`
  font-family: Roboto;
  font-weight: 700;
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

export const CardDescricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 10px;
`;

export const CardPreco = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  color: #e66767;
  margin-top: 10px;
`;

export const CardBotao = styled.button`
  padding: 10px 20px;
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
`;

export const Rodape = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
`;

export const RodapeTexto = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #333;
`;
