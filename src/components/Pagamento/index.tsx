import React from "react";
import { BotaoConfirmar, BotaoVoltar, Campo, CampoMenor, Form, LinhaDupla, Overlay, SidebarEntrega, Titulo } from "./styles";

type Props = {
  onFecharPagamento: () => void;
  onConfirmarPagamento: () => void;
  onVoltarParaEntrega: () => void;
};

const Pagamento: React.FC<Props> = ({ onFecharPagamento, onConfirmarPagamento, onVoltarParaEntrega }) => {
  return (
    <Overlay onClick={onFecharPagamento}>
      <SidebarEntrega onClick={(e) => e.stopPropagation()}>
        <Titulo>Pagamento</Titulo>
        <Form>
          <Campo placeholder="Número do Cartão" />
          <Campo placeholder="Nome no Cartão" />
          <LinhaDupla>
            <CampoMenor placeholder="Data de Validade (MM/AA)" />
            <CampoMenor placeholder="CVV" />
          </LinhaDupla>
          <BotaoConfirmar onClick={() => {
            // Lógica para processar o pagamento (simulada aqui)
            console.log('Pagamento Confirmado!');
            onConfirmarPagamento(); // Chama a FUNÇÃO RECEBIDA COMO PROP
          }}>
            Confirmar Pagamento
          </BotaoConfirmar>
          <BotaoVoltar onClick={() => {
            console.log('Voltar para Entrega!');
            onVoltarParaEntrega(); // Chama a FUNÇÃO RECEBIDA COMO PROP
          }}>
            Voltar
          </BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Pagamento;