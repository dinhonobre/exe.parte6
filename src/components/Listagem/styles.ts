import { styled } from 'styled-components'

export const ListagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 64px 16px;
  box-sizing: border-box;
  max-width: 1366px;
  margin: 0 auto;
`

export const RestauranteCard = styled.div`
displey: grid;
  flex: 1 1 300px;
  max-width: 400px;
  width: 100%;
  margin-bottom: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`
