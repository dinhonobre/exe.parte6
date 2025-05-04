import styled from 'styled-components'

export const ListagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os itens que não cabem na linha atual passem para a próxima
  justify-content: center; // Centraliza os itens
  gap: 20px; // Espaçamento entre os cards
  padding: 20px;
`

export const RestauranteCard = styled.div`
  width: calc(50% - 20px); // Define o tamanho dos cards, ficando 2 por linha
  max-width: 500px; // Tamanho máximo do card
`
