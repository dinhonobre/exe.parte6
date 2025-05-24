import React, { useState, useEffect } from "react"; // Importa React e hooks para gerenciar estado e efeitos
import { useParams } from "react-router-dom"; // Para pegar parâmetros da URL (como o id do restaurante)
import CardPerfil from "../../components/CardPerfil"; // Componente para mostrar cada produto
import SidebarCarrinho from "../../components/SidebarCarrinho"; // Carrinho lateral com os produtos adicionados
import { Container, Overlay, ProdutoContainer } from "./styles"; // Estilos para a página Perfil
import PerfilHeader from "../../components/PerfilHeader"; // Cabeçalho da página Perfil
import Footer from "../../components/Footer"; // Rodapé da página
import Apresentacao from "../../components/Apresentacao"; // Componente para mostrar informações do restaurante
import { useDispatch } from "react-redux"; // Para enviar ações ao Redux (controle global do estado)
import { adicionarAoCarrinho as adicionarAoCarrinhoAction } from "../../store/carrinhoSlice"; // Ação para adicionar item no carrinho
import RestauranteModal from "../../components/RestauranteModal"; // Modal que aparece quando clica em um produto
import Entrega from "../../components/Entrega"; // Tela para preencher dados de entrega
import Pagamento from "../../components/Pagamento"; // Tela para escolher forma de pagamento
import Confirmacao from "../../components/Confirmacao"; // Tela para mostrar confirmação do pedido

// Tipagem para o Produto que vem do restaurante (ajuda o TypeScript a entender o formato dos dados)
type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
  foto: string;
  nome: string;
};

// Tipagem para o item que vai no carrinho
type ItemCarrinho = {
  id: number;
  titulo: string;
  preco: string;
  imagem: string;
  quantidade: number;
};

const Perfil = () => {
  // Estado para guardar a lista de produtos do restaurante
  const [produtos, setProdutos] = useState<Produto[]>([]);
  // Estado para mostrar se está carregando algo (ex: buscar dados)
  const [loading, setLoading] = useState(false);
  // Produto selecionado para mostrar no modal
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  // Controle se o modal está aberto ou não
  const [modalAberto, setModalAberto] = useState(false);
  // Controle se o carrinho lateral está aberto
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  // Lista de itens que estão no carrinho (aqui guardando localmente)
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);
  // Controla se está mostrando a tela de entrega
  const [mostrarEntrega, setMostrarEntrega] = useState(false);
  // Controla se está mostrando a tela de pagamento
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  // Controla se está mostrando a tela de confirmação
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  // Restaurante selecionado para o modal do restaurante
  const [restauranteSelecionado, setRestauranteSelecionado] = useState<any>(null);
  // Controla se o modal do restaurante está aberto
  const [modalRestauranteAberto, setModalRestauranteAberto] = useState(false);
  // Guarda o ID do pedido confirmado
  const [orderId, setOrderId] = useState("");
  // Para disparar ações no Redux (adicionar item no carrinho global)
  const dispatch = useDispatch();

  // Pega o parâmetro "id" da URL (ex: restaurante/123)
  const { id } = useParams();
  // Guarda os dados do restaurante carregados da API
  const [restaurante, setRestaurante] = useState<any>(null);

  // useEffect para buscar dados do restaurante quando o componente carrega ou o id muda
  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        // Busca os dados do restaurante e seu cardápio
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        );
        const data = await response.json();
        setRestaurante(data);
        if (data.cardapio) {
          setProdutos(data.cardapio); // Atualiza lista de produtos do restaurante
        }
      } catch (error) {
        console.error("Erro ao carregar restaurante:", error);
      }
    };

    fetchRestaurante();
  }, [id]); // Esse efeito roda toda vez que o id mudar

  // Fecha o carrinho se não tiver mais itens nele
  useEffect(() => {
    if (itensCarrinho.length === 0) {
      setCarrinhoAberto(false);
    }
  }, [itensCarrinho]);

  // Função para adicionar um produto ao carrinho usando Redux
  const adicionarAoCarrinhoRedux = (produto: Produto) => {
    if (!produto) return;

    // Cria um item com as informações necessárias para o carrinho
    const item: ItemCarrinho = {
      id: produto.id,
      titulo: produto.nome,
      preco: produto.preco,
      imagem: produto.foto,
      quantidade: 1,
    };

    // Envia ação para adicionar o item no carrinho global
    dispatch(adicionarAoCarrinhoAction(item));
    // Abre o carrinho para o usuário ver o item adicionado
    setCarrinhoAberto(true);
  };

  // Função para abrir a tela de entrega e fechar o carrinho
  const abrirEntrega = () => {
    setCarrinhoAberto(false);
    setMostrarEntrega(true);
  };

  // Função para abrir a tela de pagamento
  const abrirPagamento = () => {
    setMostrarEntrega(false);
    setMostrarPagamento(true);
  };

  // Fecha o pagamento e abre a confirmação do pedido
  const fecharPagamento = (orderIdParam: string) => {
    setMostrarPagamento(false);
    setMostrarConfirmacao(true);
    setOrderId(orderIdParam); // Salva o id do pedido para mostrar na confirmação
  };

  // Fecha a tela de confirmação do pedido
  const fecharConfirmacao = () => {
    setMostrarConfirmacao(false);
  };

  // Função que seria para buscar dados de um produto específico (ainda incompleta)
  const handleAdicionarAoCarrinhoProduto = async (produtoId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`url-do-produto/${produtoId}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar produto: ${response.status}`);
      }
      const data = await response.json();
      // Aqui você poderia usar os dados do produto, ex: abrir modal ou adicionar ao carrinho
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      alert("Erro ao buscar produto.");
    } finally {
      setLoading(false);
    }
  };

  // Fecha o modal do restaurante
  const fecharModalRestaurante = () => {
    setModalRestauranteAberto(false);
    setRestauranteSelecionado(null);
  };

  // Fecha o carrinho lateral
  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  return (
    <>
      {/* Cabeçalho da página Perfil */}
      <PerfilHeader />

      {/* Mostra informações do restaurante ou mensagem de carregando */}
      {restaurante ? (
        <Apresentacao tipo={restaurante.tipo} nome={restaurante.titulo} />
      ) : (
        <p>Carregando restaurante...</p>
      )}

      {/* Tela escura atrás do carrinho quando carrinho aberto e outras telas não abertas */}
      {carrinhoAberto &&
        !mostrarEntrega &&
        !mostrarPagamento &&
        !mostrarConfirmacao && <Overlay onClick={fecharCarrinho} />}
      {/* Tela escura atrás da confirmação */}
      {mostrarConfirmacao && <Overlay />}

      {/* Container principal da página, ajusta o layout conforme o carrinho aberto */}
      <Container carrinhoAberto={carrinhoAberto}>
        {/* Lista de produtos exibidos (máximo 6) */}
        <ProdutoContainer>
          {produtos.slice(0, 6).map((produto) => (
            <CardPerfil
              key={produto.id}
              id={produto.id}
              titulo={produto.nome}
              descricao={produto.descricao}
              imagem={produto.foto}
              preco={produto.preco}
              // Quando clica para adicionar ao carrinho, abre o modal do produto
              aoAdicionarAoCarrinho={() => {
                setProdutoSelecionado(produto);
                setModalAberto(true);
              }}
            />
          ))}
        </ProdutoContainer>
          {/* Modal que mostra o produto selecionado */}
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
            // Quando clica para adicionar no carrinho dentro do modal
            onAddToCart={() => adicionarAoCarrinhoRedux(produtoSelecionado)}
          />
        )}
      </Container>
        {/* Modal de restaurante aberto */}
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
      {/* Sidebar do carrinho (mostra os itens adicionados) */}
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
