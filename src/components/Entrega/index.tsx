import React from "react";
import { BotaoConfirmar, BotaoVoltar, Campo, CampoMenor, Form, LinhaDupla, Overlay, SidebarEntrega, Titulo } from "./styles";

type Props = {
  onVoltar: () => void;
  onContinuarPagamento: () => void;
};

const Entrega: React.FC<Props> = ({ onVoltar, onContinuarPagamento }) => {
  return (
    <Overlay>
      <SidebarEntrega>
        <Titulo>Entrega</Titulo>
        <Form>
          <Campo placeholder="Nome" />
          <Campo placeholder="Endereço" />
          <Campo placeholder="Cidade" />
          <LinhaDupla>
            <CampoMenor placeholder="CEP" />
            <CampoMenor placeholder="Número" />
          </LinhaDupla>
          <Campo placeholder="Complemento" />
          <BotaoConfirmar onClick={onContinuarPagamento}>Continuar com o pagamento</BotaoConfirmar>
          <BotaoVoltar onClick={onVoltar}>Voltar para carrinho</BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Entrega;