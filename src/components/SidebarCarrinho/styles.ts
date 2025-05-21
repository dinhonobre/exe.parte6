// src/components/SidebarCarrinho/styles.ts
import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #e66767;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1100;
  padding: 20px;
  overflow-y: none; /* Corrige a propriedade de overflow */
  
  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%; /* Sidebar ocupa a tela inteira em dispositivos menores */
    height: 100vh;
    right: 10px;
  }
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
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 16px;
  position: relative;
  margin-right: 40px;
  background: #FFEBD9;

  
  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura da tela em dispositivos menores */
    margin-right: 0; /* Remove a margem à direita */
    height: auto; /* Altura se ajusta automaticamente ao conteúdo */
  }
`;

export const ImagemProduto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
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
  margin-top: 6px;
  padding: 0;
  max-width: 200px;   /* limita a largura máxima do título */
  white-space: nowrap; /* impede quebra de linha */
  overflow: hidden;    /* esconde o texto que ultrapassa */
  text-overflow: ellipsis; /* adiciona "..." no final */
`;

export const Preco = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #e66767;
  margin-bottom: 6px;
`;

export const Quantidade = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #e66767;
  margin-left: 0;
  margin-bottom: 6px;
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
  align-items: center; /* Alinha verticalmente */
  margin-top: 48px;
  margin-bottom: 0px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  color: #FFEBD9;
`;

export const ValorTotalTexto = styled.p`
  text-align: left;
  white-space: nowrap;
  color: #FFEBD9;
`;

export const ValorTotalValor = styled.p`
  text-align: right;
  white-space: nowrap;
  color: #FFEBD9;
`;


export const BotaoContinuar = styled.button`
  width: 100%;
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
  margin-top: 0px;
  cursor: pointer;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%; /* O botão ocupa a largura total em telas menores */
  }
`;
