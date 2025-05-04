import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: rgb(236, 181, 181);
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: relative;
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  color:#E66767;
`

export const Carrinho = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  color:#E66767;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 57.5px;
`
