import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 304px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Imagem = styled.img`
  width: 304px;
  height: 167px;
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: 900;
  font-size: 16px;
  color: #fff;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
`

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  background-color: #FFEBD9;
  color: #E66767;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: none;
  cursor: pointer;
`
