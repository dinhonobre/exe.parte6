import styled from 'styled-components'

export const OverlayConfirmacao = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
`

export const SidebarConfirmacao = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: #E66767;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 16px;
  }
`

export const TituloConfirmacao = styled.h2`
  margin-bottom: 20px;
  color: #FFEBD9;
  font-size: 1.5rem;
`

export const MensagemConfirmacao = styled.p`
  line-height: 1.6;
  color: #FFEBD9;
  font-size: 1rem;
`

export const BotaoConcluir = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`
