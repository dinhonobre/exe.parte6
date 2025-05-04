// src/components/RestauranteCard/styles.ts
import styled from 'styled-components'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

export const Imagem = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`

export const Titulo = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e66767;
`

export const Nota = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e66767;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Descricao = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  padding: 0 16px;
  margin-bottom: auto;
`

export const Botao = styled.button`
  width: 82px;
  height: 24px;
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  border: none;
  border-radius: 4px;
  margin: 16px;
  align-self: flex-start;
  cursor: pointer;
  text-align: center;
`
export const Estrela = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 4px;
`
