import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #E66767;
  width: 100%;
  max-width: 320px;
  height: auto;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  position: relative; /* Necessário para posicionar a categoria */
`

export const CardImagem = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`

export const CardTitulo = styled.h3`
  font-size: 1.125rem; /* 18px */
  font-weight: bold;
  color: #FFEBD9;
  margin: 0;
  padding-bottom: 8px;
`

export const CardDescricao = styled.p`
  font-size: 0.875rem; /* 14px */
  color: #FFEBD9;
  margin: 10px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardBotao = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`

export const Categoria = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  min-width: 61px;
  height: 26px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 0.75rem; /* 12px */
  background-color: #e66767;
  color: #ffebd9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 8px;
  line-height: 1;
`
