import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFEBD9;
  gap: 16px;
  box-sizing: border-box;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const FooterText = styled.p`
  max-width: 480px;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: #E66767;
  line-height: 1.4;
`
