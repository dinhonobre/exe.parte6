import React, { useState, useEffect } from "react";
import CardPerfil from "../../components/CardPerfil";
import PerfilComModal from "../../components/PerfilComModal";
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

type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
  foto: string;
  nome: string;
};

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
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  );
  const [modalAberto, setModalAberto] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);
  const [mostrarEntrega, setMostrarEntrega] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] =
    useState<any>(null);
  const [modalRestauranteAberto, setModalRestauranteAberto] = useState(false);
  const [orderId, setOrderId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://fake-api-tau.vercel.app/api/efood/restaurantes/1"
        );
        const data = await response.json();
        if (data.cardapio) {
          setProdutos(data.cardapio);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    if (itensCarrinho.length === 0) {
      setCarrinhoAberto(false);
    }
  }, [itensCarrinho]);

  const adicionarAoCarrinhoRedux = (produto: Produto) => {
  if (!produto) return;

  const item: ItemCarrinho = {
    id: produto.id,
    titulo: produto.nome,
    preco: produto.preco,
    imagem: produto.foto,
    quantidade: 1
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

  const handleAdicionarAoCarrinhoProduto = async (produtoId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`url-do-produto/${produtoId}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar produto: ${response.status}`);
      }
      const data = await response.json();
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      alert("Erro ao buscar produto.");
    } finally {
      setLoading(false);
    }
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
      <Apresentacao />
      {carrinhoAberto &&
        !mostrarEntrega &&
        !mostrarPagamento &&
        !mostrarConfirmacao && <Overlay onClick={fecharCarrinho} />}
      {mostrarConfirmacao && <Overlay />}
      <Container carrinhoAberto={carrinhoAberto}>
        <ProdutoContainer>
          {produtos.slice(0, 6).map((produto) => {
            return (
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
            );
          })}
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
