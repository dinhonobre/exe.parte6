import React, { useState } from "react";
import { Modal, ModalContent, ModalTitle, ModalDescricao, ModalPreco, ModalBotao } from "./styles";
import { Produto } from "../../models/Produto";

type Props = {
  produto: Produto; // Espera um objeto Produto em vez de 'any'
  onClose: () => void;
  aoAdicionarAoCarrinho: () => void;
  loading: boolean;
};

const PerfilComModal = ({ produto, onClose, aoAdicionarAoCarrinho, loading }: Props) => {
  if (loading) {
    return <div>Loading...</div>; // Exibe um loading enquanto os dados estão sendo carregados
  }

  return (
    <Modal>
      <ModalContent>
        <div style={{ display: 'flex', gap: '20px' }}>
          <img src={produto.imagem} alt={produto.titulo} style={{ width: '100px', height: '100px' }} />
          <div>
            <ModalTitle>{produto.titulo}</ModalTitle>
            <ModalDescricao>{produto.descricao}</ModalDescricao>
            <ModalPreco>Preço: {produto.preco}</ModalPreco>
            <ModalBotao onClick={aoAdicionarAoCarrinho}>Adicionar ao Carrinho</ModalBotao>
          </div>
        </div>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </Modal>
  );
};

export default PerfilComModal;
