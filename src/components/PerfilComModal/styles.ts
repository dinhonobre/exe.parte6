import styled from 'styled-components'

export const FundoEscuro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Modal = styled.div`
  background-color: #e66767;
  display: flex;
  padding: 32px;
  position: relative;
  border-radius: 8px;
  max-width: 1024px;
`

export const BotaoFechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

export const Imagem = styled.img`
  width: 280px;
  height: auto;
  border-radius: 8px;
`

export const Conteudo = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Texto = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
`

export const BotaoAdicionar = styled.button`
  background-color: #fff;
  color: #e66767;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`
