import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 1366px;
  height: 298px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color:#FFEBD9;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  

  img {
    width: 24px;
    height: 24px;
    color: #E66767;
  }
`

export const FooterText = styled.p`
  width: 480px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  color:#E66767;
  line-height: 1;
  margin-top: 16px;
`
