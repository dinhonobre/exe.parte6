import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removerDoCarrinho } from "../../store/carrinhoSlice";
import {
  Sidebar,
  Item,
  ImagemProduto,
  Info,
  Titulo,
  Preco,
  Quantidade,
  Lixeira,
  ValorTotalContainer,
  ValorTotalTexto,
  ValorTotalValor,
  BotaoContinuar,
  SidebarFundo,
} from "./styles";
import IconeLixeira from "../../assets/lixeira.icon.png";

interface ItemCarrinho {
  id: number;
  titulo: string;
  preco: string;
  imagem: string;
  quantidade: number;
}

interface SidebarCarrinhoProps {
  aoContinuar: () => void;
  onFechar: () => void;
}

const SidebarCarrinho: React.FC<SidebarCarrinhoProps> = ({
  aoContinuar,
  onFechar,
}) => {
  const produtosCarrinho = useSelector(
    (state: any) => state.carrinho.itens
  ) as ItemCarrinho[];

  const dispatch = useDispatch();

  const handleRemoverItem = (id: number) => {
    dispatch(removerDoCarrinho(id));
    if (produtosCarrinho.length === 1) {
      onFechar();
    }
  };

  const calcularTotal = (): number => {
    return produtosCarrinho.reduce((total: number, produto) => {
      return total + Number(produto.preco) * produto.quantidade;
    }, 0);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <SidebarFundo onClick={onFechar}>
      <Sidebar onClick={stopPropagation}>
        {produtosCarrinho.map((produto: ItemCarrinho) => (
          <Item key={produto.id}>
            <ImagemProduto src={produto.imagem} alt={produto.titulo} />

            <Info>
              <Titulo title={produto.titulo}>{produto.titulo}</Titulo>
              <Quantidade>
                {produto.quantidade}
              </Quantidade>
              <Preco>
               {(Number(produto.preco) * produto.quantidade).toFixed(2)}
              </Preco>
            </Info>
            <Lixeira
              onClick={() => handleRemoverItem(produto.id)}
              src={IconeLixeira}
              alt="Lixeira"
            />
          </Item>
        ))}

        <ValorTotalContainer>
          <ValorTotalTexto>Valor total</ValorTotalTexto>
          <ValorTotalValor>R$ {calcularTotal().toFixed(2)}</ValorTotalValor>
        </ValorTotalContainer>

        <BotaoContinuar onClick={aoContinuar}>
          Continuar com a entrega
        </BotaoContinuar>
      </Sidebar>
    </SidebarFundo>
  );
};

export default SidebarCarrinho;
