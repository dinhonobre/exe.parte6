import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPerfil from "../../components/CardPerfil";
import SidebarCarrinho from "../../components/SidebarCarrinho";
import { Container, Overlay, ProdutoContainer } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import Footer from "../../components/Footer";
import Apresentacao from "../../components/Apresentacao";
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho as adicionarAoCarrinhoAction } from "../../store/carrinhoSlice";
import RestauranteModal from "../../components/RestauranteModal";
import Entrega from "../../components/Entrega";
import Pagamento from "../../components/Pagamento";
import Confirmacao from "../../components/Confirmacao";

// Tipagem para o Produto
type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
  foto: string;
  nome: string;
};

// Tipagem para o item do carrinho
type ItemCarrinho = {
  id: number;
  titulo: string;
  preco: string;
  imagem: string;
  quantidade: number;
};

const Perfil = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [mostrarEntrega, setMostrarEntrega] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] = useState<any>(null);
  const [modalRestauranteAberto, setModalRestauranteAberto] = useState(false);
  const [orderId, setOrderId] = useState("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const [restaurante, setRestaurante] = useState<any>(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes');
const data = await response.json();
const restauranteSelecionado = data.find((r: any) => r.id === Number(id));
setRestaurante(restauranteSelecionado);
if (restauranteSelecionado?.cardapio) {
  setProdutos(restauranteSelecionado.cardapio);
}

      } catch (error) {
        console.error("Erro ao carregar restaurante. Tente novamente mais tarde.", error);
      }
    };

    fetchRestaurante();
  }, [id]);

  const adicionarAoCarrinhoRedux = (produto: Produto) => {
    if (!produto) return;

    const item: ItemCarrinho = {
      id: produto.id,
      titulo: produto.nome,
      preco: produto.preco,
      imagem: produto.foto,
      quantidade: 1,
    };

    dispatch(adicionarAoCarrinhoAction(item));
    setCarrinhoAberto(true);
  };

  const abrirEntrega = () => {
    setCarrinhoAberto(false);
    setMostrarEntrega(true);
  };

  const abrirPagamento = () => {
    setMostrarEntrega(false);
    setMostrarPagamento(true);
  };

  const fecharPagamento = (orderIdParam: string) => {
    setMostrarPagamento(false);
    setMostrarConfirmacao(true);
    setOrderId(orderIdParam);
  };

  const fecharConfirmacao = () => {
    setMostrarConfirmacao(false);
  };

  const fecharModalRestaurante = () => {
    setModalRestauranteAberto(false);
    setRestauranteSelecionado(null);
  };

  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  return (
    <>
      <PerfilHeader />

      {restaurante ? (
        <Apresentacao tipo={restaurante.tipo} nome={restaurante.titulo} />
      ) : (
        <p>Carregando restaurante...</p>
      )}

      {carrinhoAberto &&
        !mostrarEntrega &&
        !mostrarPagamento &&
        !mostrarConfirmacao && <Overlay onClick={fecharCarrinho} />}
      {mostrarConfirmacao && <Overlay />}

      <Container carrinhoAberto={carrinhoAberto}>
        <ProdutoContainer>
          {produtos.slice(0, 6).map((produto) => (
            <CardPerfil
              key={produto.id}
              id={produto.id}
              titulo={produto.nome}
              descricao={produto.descricao}
              imagem={produto.foto}
              preco={produto.preco}
              aoAdicionarAoCarrinho={() => {
                setProdutoSelecionado(produto);
                setModalAberto(true);
              }}
            />
          ))}
        </ProdutoContainer>

        {modalAberto && produtoSelecionado && (
          <RestauranteModal
            restaurante={{
              id: produtoSelecionado.id,
              titulo: produtoSelecionado.nome,
              descricao: produtoSelecionado.descricao,
              capa: produtoSelecionado.foto,
              preco: Number(produtoSelecionado.preco),
              avaliacao: 0,
              tipo: "",
            }}
            onClose={() => {
              setModalAberto(false);
              setProdutoSelecionado(null);
            }}
            onAddToCart={() => adicionarAoCarrinhoRedux(produtoSelecionado)}
          />
        )}
      </Container>

      {modalRestauranteAberto && restauranteSelecionado && (
        <RestauranteModal
          restaurante={restauranteSelecionado}
          onClose={fecharModalRestaurante}
          onAddToCart={() => {
            adicionarAoCarrinhoRedux({
              ...restauranteSelecionado,
              imagem: restauranteSelecionado.capa,
            });
            setModalRestauranteAberto(false);
            setCarrinhoAberto(true);
          }}
        />
      )}

      {carrinhoAberto && !mostrarEntrega && !mostrarPagamento && (
        <SidebarCarrinho aoContinuar={abrirEntrega} onFechar={fecharCarrinho} />
      )}

      {mostrarEntrega && !mostrarPagamento && (
        <Entrega
          onVoltar={() => setMostrarEntrega(false)}
          onContinuarPagamento={abrirPagamento}
        />
      )}

      {mostrarPagamento && (
        <Pagamento
          onFecharPagamento={() => setMostrarPagamento(false)}
          onPedidoConfirmado={(id: string) => {
            setOrderId(id);
            setMostrarPagamento(false);
            setMostrarConfirmacao(true);
          }}
          onVoltarParaEntrega={() => {
            setMostrarPagamento(false);
            setMostrarEntrega(true);
          }}
        />
      )}

      {mostrarConfirmacao && (
        <Confirmacao
          onFecharConfirmacao={fecharConfirmacao}
          orderId={orderId}
        />
      )}

      <Footer />
    </>
  );
};

export default Perfil;
