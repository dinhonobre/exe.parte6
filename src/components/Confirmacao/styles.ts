import styled from 'styled-components';

export const OverlayConfirmacao = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  display: flex;
  justify-content: flex-end; /* Alinha a barra lateral à direita */
  align-items: center; /* Centraliza verticalmente (opcional, dependendo do design) */
  z-index: 1000; /* Garante que fique acima de outros elementos */
`;

export const SidebarConfirmacao = styled.div`
  width: 400px; /* Largura da barra lateral (ajuste conforme necessário) */
  height: 100%;
  background-color:#E66767;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o conteúdo à esquerda */
  overflow-y: auto; /* Adiciona barra de rolagem se o conteúdo for longo */
`;

export const TituloConfirmacao = styled.h2`
  margin-bottom: 20px;
  color: #FFEBD9;
`;

export const MensagemConfirmacao = styled.p`
  line-height: 1.6;
  color: #FFEBD9;
`;

export const BotaoConcluir = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;
`;
