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
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho as adicionarAoCarrinhoAction } from "../../store/carrinhoSlice";

type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
};

const produtos: Produto[] = [
  { id: 1, titulo: "Pizza Marguerita 1", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "39.90" },
  { id: 2, titulo: "Pizza Marguerita 2", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "42.50" },
  { id: 3, titulo: "Pizza Marguerita 3", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "35.00" },
  { id: 4, titulo: "Pizza Marguerita 4", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "45.99" },
  { id: 5, titulo: "Pizza Marguerita 5", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "38.75" },
  { id: 6, titulo: "Pizza Marguerita 6", descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", imagem: imagemPerfil, preco: "41.20" },
];

const Perfil = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false); // Estado para controlar a visibilidade do carrinho
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);
  const [mostrarEntrega, setMostrarEntrega] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] = useState<any>(null);
  const [modalRestauranteAberto, setModalRestauranteAberto] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itensCarrinho.length === 0) {
      setCarrinhoAberto(false);
    }
  }, [itensCarrinho]);

  const adicionarAoCarrinhoRedux = (produto: Produto) => {
    console.log("Dispatching adicionarAoCarrinho:", produto);
    dispatch(adicionarAoCarrinhoAction(produto));
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
      const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteId}`);
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

  const fecharCarrinho = () => { // <------------------- FUNÇÃO PARA FECHAR O CARRINHO
    setCarrinhoAberto(false);
  };

  return (
    <>
      <PerfilHeader />
      <Apresentacao />
      {carrinhoAberto && !mostrarEntrega && !mostrarPagamento && !mostrarConfirmacao && (
        <Overlay onClick={fecharCarrinho} /> // <---- Passe a função para fechar ao clicar fora
      )}
      {mostrarConfirmacao && <Overlay />}
      <Container carrinhoAberto={carrinhoAberto}>
        {produtos.map((produto) => (
          <CardPerfil
            key={produto.id}
            id={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            imagem={produto.imagem}
            preco={produto.preco}
            aoAdicionarAoCarrinho={adicionarAoCarrinhoRedux}
            aoComprar={() => handleComprarRestaurante(produto.id.toString())}
          />
        ))}
      </Container>

      {modalAberto && (
        <PerfilComModal
          onClose={() => setModalAberto(false)}
          aoAdicionar={(prod) => {
            adicionarAoCarrinhoRedux(prod);
            setModalAberto(false);
            setCarrinhoAberto(true);
          }}
        />
      )}
      {console.log("Valor de modalRestauranteAberto antes da renderização:", modalRestauranteAberto)}
      {modalRestauranteAberto && (
        <RestauranteModal restaurante={restauranteSelecionado} onClose={fecharModalRestaurante} />
      )}

      {carrinhoAberto && !mostrarEntrega && !mostrarPagamento && (
        <SidebarCarrinho
          aoContinuar={abrirEntrega}
          onFechar={fecharCarrinho}
        />
      )}

      {mostrarEntrega && !mostrarPagamento && (
        <Entrega onVoltar={() => setMostrarEntrega(false)} onContinuarPagamento={abrirPagamento} />
      )}

      {mostrarPagamento && (
        <Pagamento
          onFecharPagamento={fecharPagamento}
          onConfirmarPagamento={() => setMostrarConfirmacao(true)}
          onVoltarParaEntrega={() => {
            setMostrarPagamento(false);
            setMostrarEntrega(true);
          }}
        />
      )}

      {mostrarConfirmacao && <Confirmacao onFecharConfirmacao={fecharConfirmacao} />}

      <Footer />
    </>
  );
};

export default Perfil;