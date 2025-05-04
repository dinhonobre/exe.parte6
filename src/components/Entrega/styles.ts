import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 999;
`

export const SidebarEntrega = styled.div`
  background-color: #E66767;
  width: 360px;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: #FFEBD9;
  margin-bottom: 24px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Campo = styled.input`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`

export const LinhaDupla = styled.div`
  display: flex;
  gap: 8px;
`

export const CampoMenor = styled(Campo)`
  flex: 1;
  width: 100%;
`

export const BotaoConfirmar = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const BotaoVoltar = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
