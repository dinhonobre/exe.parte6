import React from "react";
import { ModalOverlay, ModalContainer, CloseButton } from "./styles"; // Importe os estilos

interface Props {
  restaurante: any; 
  onClose: () => void;
}

const RestauranteModal: React.FC<Props> = ({ restaurante, onClose }) => {

  if (!restaurante) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
           {" "}
      <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>       {" "}
        <h2>{restaurante.titulo}</h2>        <p>ID: {restaurante.id}</p>       {" "}
        <p>Avaliação: {restaurante.avaliacao}</p>     {" "}
      </ModalContainer>
         {" "}
    </ModalOverlay>
  );
};

export default RestauranteModal;
