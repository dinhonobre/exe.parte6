import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%; /* garante que o container não ultrapasse o viewport */
`

export const Tipo = styled.h4`
  font-size: 1rem;
  color: #E66767;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const Titulo = styled.h2`
  font-size: 2rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`
