import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 304px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 304 / 167; /* mantém proporção mesmo com ajuste do tamanho */
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: 900;
  font-size: 1rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #FFEBD9;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const Botao = styled.button`
  width: 100%;
  max-width: 304px;
  height: 32px;
  background-color: #FFEBD9;
  color: #E66767;
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 36px;
  }
`
