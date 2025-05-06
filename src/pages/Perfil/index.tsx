import React, { useState } from "react";
import CardPerfil from "../../components/CardPerfil";
import PerfilComModal from "../../components/PerfilComModal";
import SidebarCarrinho from "../../components/SidebarCarrinho";
import { Container, Overlay } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import Footer from "../../components/Footer";
import Apresentacao from "../../components/Apresentacao";
import imagemPerfil from "../../assets/imagemPerfil.png";
import { useEffect } from "react";
import Entrega from "../../components/Entrega";
import Pagamento from "../../components/Pagamento";
import Confirmacao from "../../components/Confirmacao";
import RestauranteModal from "../../components/RestauranteModal";

type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
};

const produtos = [
  {
    id: 1,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
  {
    id: 2,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
  {
    id: 3,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
  {
    id: 4,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
  {
    id: 5,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
  {
    id: 6,
    titulo: "Pizza Marguerita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
  },
];

const Perfil = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);
  const [mostrarEntrega, setMostrarEntrega] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] =
    useState<any>(null);
  const [modalRestauranteAberto, setModalRestauranteAberto] = useState(false);

  useEffect(() => {
    if (itensCarrinho.length === 0) {
      setCarrinhoAberto(false);
    }
  }, [itensCarrinho]);

  const adicionarAoCarrinho = (produto: any) => {
    setItensCarrinho((prevItens) => [...prevItens, produto]);
  };

  const removerDoCarrinho = (id: number) => {
    setItensCarrinho((prevItens) =>
      prevItens.filter((produto) => produto.id !== id)
    );
  };

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModalEAbrirCarrinho = () => {
    setModalAberto(false);
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

  const fecharPagamento = () => {
    setMostrarPagamento(false);
    setMostrarConfirmacao(true);
  };

  const fecharConfirmacao = () => {
    setMostrarConfirmacao(false);
    // Lógica para resetar o estado do pedido/carrinho, se necessário
  };

  const handleComprarRestaurante = async (restauranteId: string) => {
    try {
      const response = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRestauranteSelecionado(data);
      setModalRestauranteAberto(true);
    } catch (error) {
      console.error("Erro ao buscar dados do restaurante:", error);
    }
  };

  const fecharModalRestaurante = () => {
    setModalRestauranteAberto(false);
    setRestauranteSelecionado(null);
  };

  return (
    <>
      <PerfilHeader />
      <Apresentacao />
      {carrinhoAberto &&
        !mostrarEntrega &&
        !mostrarPagamento &&
        !mostrarConfirmacao && <Overlay />}
      {mostrarConfirmacao && <Overlay />}
      <Container carrinhoAberto={carrinhoAberto}>
        {produtos.map((produto, index) => (
          <CardPerfil
            key={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            imagem={produto.imagem}
            aoAbrirModal={abrirModal}
            aoComprar={() => handleComprarRestaurante((index + 1).toString())}
          />
        ))}
      </Container>

      {modalAberto && (
        <PerfilComModal
          onClose={() => setModalAberto(false)}
          aoAdicionar={(produto) => {
            adicionarAoCarrinho(produto);
            setModalAberto(false);
            setCarrinhoAberto(true);
          }}
        />
      )}
      {console.log("Valor de modalRestauranteAberto antes da renderização:", modalRestauranteAberto)}
      {modalRestauranteAberto && (
        <RestauranteModal
          restaurante={restauranteSelecionado}
          onClose={fecharModalRestaurante}
        />
      )}

      {carrinhoAberto && !mostrarEntrega && !mostrarPagamento && (
        <SidebarCarrinho
          aoRemover={removerDoCarrinho}
          produtosCarrinho={itensCarrinho}
          aoContinuar={abrirEntrega}
        />
      )}

      {mostrarEntrega && !mostrarPagamento && (
        <Entrega
          onVoltar={() => setMostrarEntrega(false)}
          onContinuarPagamento={abrirPagamento}
        />
      )}

      {mostrarPagamento && (
        <Pagamento
          onFecharPagamento={fecharPagamento}
          onConfirmarPagamento={() => setMostrarConfirmacao(true)}
          onVoltarParaEntrega={() => {
            // Passa a função para voltar à Entrega
            setMostrarPagamento(false);
            setMostrarEntrega(true);
          }}
        />
      )}

      {mostrarConfirmacao && (
        <Confirmacao onFecharConfirmacao={fecharConfirmacao} />
      )}

      <Footer />
    </>
  );
};

export default Perfil;
