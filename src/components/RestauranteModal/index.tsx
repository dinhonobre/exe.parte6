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
    preco: number | string;
  };
  onClose: () => void;
  onAddToCart: (produto: {
    id: number;
    titulo: string;
    foto: string;
    preco: number;
  }) => void;
}

const RestauranteModal: React.FC<Props> = ({
  restaurante,
  onClose,
  onAddToCart,
}) => {
  if (!restaurante) return null;
  console.log("Modal renderizado:", restaurante);
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
                onAddToCart({
                  id: restaurante.id,
                  titulo: restaurante.titulo,
                  foto: restaurante.capa,
                  preco: Number(restaurante.preco),
                });
                onClose();
              }}
            >
              <ButtonText>
                Adicionar ao carrinho - R${" "}
                {String(restaurante.preco).replace(".", ",")}
              </ButtonText>
            </AddButton>
          </Info>
        </Content>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default RestauranteModal;
