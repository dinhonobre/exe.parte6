import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  /* Responsividade */
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 1024px;
  height: 344px;
  background: #E66767;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display: flex;
  flex-direction: row;
  padding: 32px;
  box-sizing: border-box;

  /* Ajustes para responsividade */
  @media (max-width: 1200px) {
    width: 90%;
    left: 5%;
    top: 30%;
  }

  /* Mobile view adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    top: 20%;
    padding: 20px;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  line-height: 16px;
  cursor: pointer;
  font-weight: 100; 

`;

export const AddButton = styled.button`
  width: 218px;
  height: 40px; /* aumentar um pouco a altura para ficar melhor */
  background-color: #fff; /* fundo branco para contraste */
  color: #E66767; /* texto vermelho */
  border: none;
  margin-top: auto; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d14d4d;
    color: #fff;
  }
`;

export const ButtonText = styled.span`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: inherit; /* herda a cor do AddButton */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 24px;
  margin-top: 0;
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;
  color: #FFFFFF;
  margin: 0 0 16px;
`;

