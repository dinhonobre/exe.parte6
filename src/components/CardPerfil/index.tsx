// CardPerfil.tsx
import React from "react";
import {
  Card,
  CardImagem,
  CardTitulo,
  CardDescricao,
  CardBotao,
} from "./styles";

type Props = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  preco: string;
  aoAdicionarAoCarrinho: (produto: {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    preco: string;
  }) => void;
};

const CardPerfil = ({
  id,
  titulo,
  descricao,
  imagem,
  preco,
  aoAdicionarAoCarrinho,
}: Props) => {
  const handleClick = () => {
    aoAdicionarAoCarrinho({ id, titulo, descricao, imagem, preco });
  };

  return (
    <Card>
      <div style={{ position: "relative" }}>
        <CardImagem
          src={imagem || "https://via.placeholder.com/300x200?text=Sem+Imagem"}
          alt={titulo}
        />
      </div>
      <CardTitulo>{titulo}</CardTitulo>
      <CardDescricao>{descricao}</CardDescricao>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardBotao onClick={handleClick}>Adicionar ao carrinho</CardBotao>
      </div>
    </Card>
  );
};

export default CardPerfil;
