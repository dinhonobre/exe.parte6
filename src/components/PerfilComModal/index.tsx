import React from "react";
import { FundoEscuro, Modal, Imagem, Conteudo, Texto, BotaoAdicionar, BotaoFechar } from './styles';
import imagemPerfil from '../../assets/imagemPerfil.png';

type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
};

type Props = {
  onClose: () => void;
  aoAdicionar: (produto: Produto) => void;
};

const PerfilComModal = ({ onClose, aoAdicionar }: Props) => {
  const produto = {
    id: 1,
    titulo: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: String(29.90),
    imagem: imagemPerfil,
  };

  const adicionarCarrinho = () => {
    aoAdicionar(produto);
    onClose(); 
  };

  return (
    <FundoEscuro>
      <Modal>
        <BotaoFechar onClick={onClose}>×</BotaoFechar>
        <Imagem src={produto.imagem} alt="Imagem do produto" />
        <Conteudo>
          <Texto>{produto.descricao}</Texto>
          <BotaoAdicionar onClick={adicionarCarrinho}>
            Adicionar ao carrinho - {produto.preco}
          </BotaoAdicionar>
        </Conteudo>
      </Modal>
    </FundoEscuro>
  );
};

export default PerfilComModal;
