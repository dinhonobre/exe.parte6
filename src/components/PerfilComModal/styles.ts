import styled from 'styled-components';

export const FundoEscuro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background-color: #e66767;
  display: flex;
  padding: 32px;
  position: relative;
  border-radius: 8px;
  max-width: 1024px;
`;

export const ModalContent = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ModalDescricao = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ModalPreco = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const Imagem = styled.img`
  width: 280px;
  height: auto;
  border-radius: 8px;
`;

export const Texto = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ModalBotao = styled.button`
  background-color: #fff;
  color: #e66767;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

export const SidebarCarrinhoContainer = styled.div<{ carrinhoAberto: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: ${({ carrinhoAberto }) =>
    carrinhoAberto ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 999;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CarrinhoItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BotaoRemover = styled.button`
  background-color: #e66767;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background-color: #d15353;
  }
`;

export const BotaoContinuar = styled.button`
  background-color: #0b5ed7;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  margin-top: auto;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
