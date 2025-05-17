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
  width: 400px;
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
  margin: 0;
`

export const TopoPagamento = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.label`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #FFEBD9;
  display: block;       /* Para ficar em linha separada acima do campo */
  margin-bottom: 2px;   /* Espaço entre o label e o input */
`;

export const Campo = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`

export const LinhaDupla = styled.div`
  display: flex;
  gap: 8px;
`

export const CampoMenor = styled(Campo)`
  flex: 1;
  width: 100%;
  margin-bottom: 4px;
`

export const Valor = styled.span`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #FFEBD9;
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

export const BotaoVoltar = styled.button`
  margin-top: 1px;
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
