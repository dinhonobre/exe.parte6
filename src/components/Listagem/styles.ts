import styled from 'styled-components'

export const ListagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os itens que não cabem na linha atual passem para a próxima
  justify-content: center; // Centraliza os itens
  gap: 20px; // Espaçamento entre os cards
  padding: 20px;
`

export const RestauranteCard = styled.div`
  width: calc(50% - 20px);
  max-width: 500px;

  /* Para telas menores que um certo ponto (ex: 768px) */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total em telas menores */
  }
`;
