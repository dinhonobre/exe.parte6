import React from "react";
import {
  Sidebar,
  Item,
  ImagemProduto,
  Info,
  Titulo,
  Preco,
  Lixeira,
  ValorTotalContainer,
  ValorTotalTexto,
  ValorTotalValor,
  BotaoContinuar,
} from "./styles";
import IconeLixeira from "../../assets/lixeira.icon.png";

type Props = {
  aoContinuar: () => void;
};

interface SidebarCarrinhoProps {
  aoRemover: (id: number) => void;
  produtosCarrinho: any[];
  aoContinuar: () => void;
}

const SidebarCarrinho: React.FC<SidebarCarrinhoProps> = ({
  aoRemover,
  produtosCarrinho,
  aoContinuar,
}) => {
  const calcularTotal = () => {
    return produtosCarrinho.reduce((total, produto) => {
      return total + Number(produto.preco);
    }, 0);
  };

  return (
    <Sidebar>
      {produtosCarrinho.map((produto) => (
        <Item key={produto.id}>
          <ImagemProduto src={produto.imagem} alt={produto.titulo} />
          <Info>
            <Titulo>{produto.titulo}</Titulo>
            <Preco>R$ {Number(produto.preco).toFixed(2)}</Preco>
          </Info>
          <Lixeira
            onClick={() => aoRemover(produto.id)}
            src={IconeLixeira}
            alt="Lixeira"
          />
        </Item>
      ))}

      {/* Valor total e valor somado */}
      <ValorTotalContainer>
        <ValorTotalTexto>Valor total</ValorTotalTexto>
        <ValorTotalValor>R$ {calcularTotal().toFixed(2)}</ValorTotalValor>
      </ValorTotalContainer>

      {/* Botão Continuar com a entrega */}
      <BotaoContinuar onClick={aoContinuar}>
        Continuar com a entrega
      </BotaoContinuar>
    </Sidebar>
  );
};

export default SidebarCarrinho;
