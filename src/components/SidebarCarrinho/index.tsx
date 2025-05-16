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
  Lixeira,
  ValorTotalContainer,
  ValorTotalTexto,
  ValorTotalValor,
  BotaoContinuar,
  SidebarFundo, // Importe o novo estilo
} from "./styles";
import IconeLixeira from "../../assets/lixeira.icon.png";

interface Produto {
  id: number;
  nome: string;
  preco: string;
  foto?: string;
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
  ) as Produto[];
  const dispatch = useDispatch();

  const handleRemoverItem = (id: number) => {
    dispatch(removerDoCarrinho(id));
    if (produtosCarrinho.length === 1) {
      onFechar();
    }
  };

  const calcularTotal = () => {
    return produtosCarrinho.reduce((total: number, produto: Produto) => {
      return total + Number(produto.preco);
    }, 0);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation(); // Impede que o clique dentro da sidebar feche o fundo
  };
  console.log('Produtos no carrinho:', produtosCarrinho);


  return (
    <SidebarFundo onClick={onFechar}>
      <Sidebar onClick={stopPropagation}>
        {produtosCarrinho.map((produto: Produto) => (
          <Item key={produto.id}>
            <ImagemProduto src={produto.foto} alt={produto.nome} />

            <Info>
              <Titulo>{produto.nome}</Titulo>
              <Preco>R$ {Number(produto.preco).toFixed(2)}</Preco>
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
