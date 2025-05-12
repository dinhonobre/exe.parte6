import React, { useState, useEffect } from "react";
import CardPerfil from "../../components/CardPerfil";
import PerfilComModal from "../../components/PerfilComModal";
import SidebarCarrinho from "../../components/SidebarCarrinho";
import { Container, Overlay } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import Footer from "../../components/Footer";
import Apresentacao from "../../components/Apresentacao";
import imagemPerfil from "../../assets/imagemPerfil.png";
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
  capa: string; // Adiciona a propriedade 'capa'
  nome: string; // Adiciona a propriedade 'nome'
};

const produtos: Produto[] = [
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  {
    id: 1,
    titulo: "Pizza Marguerita ",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imagem: imagemPerfil,
    preco: "39.90",
    capa: "",
    nome: "",
  },
  // Adicione outros produtos aqui
];

const Perfil = () => {
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (itensCarrinho.length === 0) {
      setCarrinhoAberto(false);
    }
  }, [itensCarrinho]);

  const adicionarAoCarrinhoRedux = (produto: Produto) => {
    if (!produto) return; // Verifica se o produto está definido
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

  const handleAdicionarAoCarrinho = async (restauranteId: number) => {
    try {
      setLoading(true); // Inicia o carregamento

      // Faz a requisição para obter os detalhes do restaurante
      const response = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteId}`
      );

      if (!response.ok) {
        throw new Error(`Erro ao buscar restaurante: ${response.status}`);
      }

      const data = await response.json();

      // Atualiza o estado com o restaurante selecionado
      setRestauranteSelecionado(data);

      // Abre o modal com os detalhes do restaurante
      setModalRestauranteAberto(true);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Ocorreu um erro ao buscar o restaurante. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza o carregamento
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
        {produtos.map((produto) => (
          <CardPerfil
            key={produto.id}
            id={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            imagem={produto.imagem}
            preco={produto.preco}
            aoAdicionarAoCarrinho={() => handleAdicionarAoCarrinho(produto.id)} // Passa o ID para a função
          />
        ))}

        {modalAberto && produtoSelecionado && (
          <PerfilComModal
            produto={produtoSelecionado}
            onClose={() => {
              setModalAberto(false);
              setProdutoSelecionado(null); // Limpa o produto selecionado ao fechar o modal
            }}
            aoAdicionarAoCarrinho={() =>
              adicionarAoCarrinhoRedux(produtoSelecionado)
            }
            loading={loading}
          />
        )}
      </Container>
      {modalRestauranteAberto && restauranteSelecionado && (
        <RestauranteModal
          restaurante={restauranteSelecionado}
          onClose={() => {
            setModalRestauranteAberto(false);
            setRestauranteSelecionado(null);
          }}
          onAddToCart={() => {
            // 1) Aqui: despacha para o Redux o item com 'capa' mapeada para 'imagem'
            adicionarAoCarrinhoRedux({
              ...restauranteSelecionado,
              imagem: restauranteSelecionado.capa,
            });

            // 2) Fecha o modal de restaurante
            setModalRestauranteAberto(false);

            // 3) Abre a sidebar
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
          onFecharPagamento={fecharPagamento}
          onConfirmarPagamento={() => setMostrarConfirmacao(true)}
          onVoltarParaEntrega={() => {
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
