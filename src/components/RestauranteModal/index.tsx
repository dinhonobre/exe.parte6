import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  Content,
  Image,
  Info,
  Title,
  Description,
  AddButton,
  ButtonText,
} from "./styles";

interface Props {
  restaurante: {
    id: number;
    titulo: string;
    avaliacao: number;
    descricao: string;
    tipo: string;
    capa: string;
  };
  onClose: () => void;
  onAddToCart: () => void;    // <-- nova prop
}

const RestauranteModal: React.FC<Props> = ({
  restaurante,
  onClose,
  onAddToCart,                // <-- recebe o callback
}) => {
  if (!restaurante) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <Content>
          <Image src={restaurante.capa} alt={restaurante.titulo} />
          <Info>
            <Title>{restaurante.titulo}</Title>
            <Description>{restaurante.descricao}</Description>
            <AddButton
              onClick={() => {
                onAddToCart();  // dispara o callback do pai
                onClose();      // fecha o modal
              }}
            >
              <ButtonText>Adicionar ao carrinho</ButtonText>
            </AddButton>
          </Info>
        </Content>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default RestauranteModal;
