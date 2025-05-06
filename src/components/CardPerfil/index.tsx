import React from 'react';
import { Card, CardImagem, CardTitulo, CardDescricao, CardBotao, BotaoComprar } from './styles'; // Importe o BotaoComprar (se você já o estilizou)

type Props = {
  titulo: string;
  descricao: string;
  imagem: string;
  aoAbrirModal: () => void;
  aoComprar: (id: string) => void;
};

const CardPerfil = ({ titulo, descricao, imagem, aoAbrirModal, aoComprar }: Props) => {
  // Supondo que você tenha ou importe um styled component chamado BotaoComprar
  return (
    <Card>
      <CardImagem src={imagem} alt={titulo} />
      <CardTitulo>{titulo}</CardTitulo>
      <CardDescricao>{descricao}</CardDescricao>
      <div style={{ display: 'flex', gap: '10px' }}> {/* Container para os botões */}
        <CardBotao onClick={aoAbrirModal}>Adicionar ao carrinho</CardBotao>
        <BotaoComprar onClick={() => aoComprar('1')}>Comprar</BotaoComprar>
      </div>
    </Card>
  );
};

export default CardPerfil
