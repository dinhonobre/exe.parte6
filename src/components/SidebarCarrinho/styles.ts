import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: #e66767;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1100;
  padding: 20px 20px 20px 20px;
  overflow-y: none;
`;

export const SidebarFundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semitransparente */
  display: flex;
  justify-content: flex-end; /* Alinha a sidebar à direita */
  z-index: 1000; /* Garante que fique acima de outros elementos */
`;

export const Item = styled.div`
  width: 344px;
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 16px;
  position: relative;
  margin-right: 40px;
`;

export const ImagemProduto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex-grow: 1;
  margin-left: 16px;
`;

export const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  margin: 0;
`;

export const Preco = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #e66767;
  margin: 4px 0 0 0;
`;

export const Lixeira = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ValorTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: #ffe_bd9;
`;

export const ValorTotalTexto = styled.p`
  width: 65px;
  height: 16px;
  text-align: left;
  color: #ffe_bd9;
`;

export const ValorTotalValor = styled.p`
  width: 65px;
  height: 16px;
  text-align: right;
  color: #ffe_bd9;
`;

export const BotaoContinuar = styled.button`
  width: 344px;
  height: 24px;
  background-color: #ffebd9;
  color: #e66767;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e66767;
    color: #fff;
  }
`;
