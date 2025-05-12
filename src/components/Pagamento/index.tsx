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
            onConfirmarPagamento(); // Chama a FUNÇÃO RECEBIDA COMO PROP
          }}>
            Finalizar Pagamento
          </BotaoConfirmar>
          <BotaoVoltar onClick={() => {
            onVoltarParaEntrega(); // Chama a FUNÇÃO RECEBIDA COMO PROP
          }}>
            Voltar para Edição de Endereço
          </BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Pagamento;