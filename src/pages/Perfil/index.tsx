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
    setCarrinhoAberto(false); // Fecha o carrinho
    setMostrarEntrega(true); // Mostra a tela de entrega
  };

  const abrirPagamento = () => {
    setMostrarEntrega(false); // Fecha a tela de entrega
    setMostrarPagamento(true); // Mostra a tela de pagamento
  };

  const fecharPagamento = () => {
    setMostrarPagamento(false);
    setMostrarConfirmacao(true); // Abre a tela de confirmação ao fechar o pagamento
  };

  const fecharConfirmacao = () => {
    setMostrarConfirmacao(false);
    // Lógica para resetar o estado do pedido/carrinho, se necessário
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
        {produtos.map((produto) => (
          <CardPerfil
            key={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            imagem={produto.imagem}
            aoAbrirModal={abrirModal}
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
    onVoltarParaEntrega={() => { // Passa a função para voltar à Entrega
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
