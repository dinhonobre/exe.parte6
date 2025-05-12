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
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`

export const Titulo = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #FFEBD9;
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Campo = styled.input`
  height: 40px;
  border: none;
  padding: 8px 12px;
  font-size: 1rem;
  box-sizing: border-box;
  width: 100%;
`

export const LinhaDupla = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const CampoMenor = styled(Campo)`
  flex: 1;
`

export const BotaoConfirmar = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`

export const BotaoVoltar = styled(BotaoConfirmar)`
  background-color: #FFEBD9;
  color:  #E66767;
  border: none;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`
