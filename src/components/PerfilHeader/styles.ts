import styled from "styled-components";

interface HeaderContainerProps {
  backgroundImage: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: relative;
  width: 100%;
  height: 186px;
  display: flex;
  gap: 288px;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  background-color: #FFEBD9;
  overflow: hidden;
  box-sizing: border-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: -1;
  }


  @media (max-width: 1024px) {
     gap: 190px;
  }

  @media (max-width: 768px) {
    height: 150px;
    padding: 0 16px;
    gap: 100px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 16px 10px;
    gap: 120px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 18px;
  left: 170px;
  color: #e66767;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Carrinho = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;


/*
export const Header = styled.header`
  width: 100%;
  height: auto;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #fff;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 15px 20px;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const TextoRestaurante = styled.h1`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  color: #e66767;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    width: 100%;
  }
`;

export const CarrinhoTexto = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  text-align: right;
  color: #e66767;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;
*/
