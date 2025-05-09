import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #E66767;
  width: 320px;
  height: 338px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que os elementos fiquem bem distribuídos */
  padding: 12px; /* Dá um respiro interno */
`

export const CardImagem = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`


export const CardTitulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #FFEBD9;
  margin: 0;
  padding-bottom: 8px;
`

export const CardDescricao = styled.p`
  font-size: 14px;
  color: #FFEBD9;
  margin: 10px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardBotao = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`

export const BotaoComprar = styled.button`
   width: 50%;
  padding: 10px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d14d4d;
    color: #FFEBD9;
  }
`

export const Categoria = styled.span`
  position: absolute;
  width: 61px;
  height: 26px;
  top: 10px; /* Ajustei a posição para dentro da imagem */
  left: 10px; /* Ajustei a posição para dentro da imagem */
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  background-color: #e66767;
  color: #ffebd9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

