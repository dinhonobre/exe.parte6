import React from "react";
import {
  Card,
  CardImagem,
  CardTitulo,
  CardDescricao,
  CardBotao,
  BotaoComprar,
  Categoria,
} from "./styles";
import { Produto } from "../../models/Produto";

type Props = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  preco: string;
  aoAdicionarAoCarrinho: (produto: Produto) => void;
  aoComprar: (id: string) => void;
};

const CardPerfil = ({
  id,
  titulo,
  descricao,
  imagem,
  preco,
  aoAdicionarAoCarrinho,
  aoComprar,
}: Props) => { 
  return (
    <Card>
      <div style={{ position: "relative" }}>
        {" "}
        {/* Container para a imagem e a categoria */}
        <CardImagem src={imagem} alt={titulo} />
      </div>
      <CardTitulo>{titulo}</CardTitulo>
      <CardDescricao>{descricao}</CardDescricao>
      <div style={{ display: "flex", gap: "10px" }}>
        <CardBotao
          onClick={() =>
            aoAdicionarAoCarrinho({ id, titulo, descricao, preco, imagem })
          }
        >
          Adicionar ao carrinho
        </CardBotao>
        <BotaoComprar onClick={() => aoComprar(id.toString())}>
          Comprar
        </BotaoComprar>
      </div>
    </Card>
  );
};

export default CardPerfil;
