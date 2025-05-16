import React from "react";
import { Label, BotaoConfirmar, BotaoVoltar, Campo, CampoMenor, Form, LinhaDupla, Overlay, SidebarEntrega, Titulo } from "./styles";

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
          <Label htmlFor="nome">Nome</Label>
<Campo id="nome" />

<Label htmlFor="endereco">Endereço</Label>
<Campo id="endereco" />

<Label htmlFor="cidade">Cidade</Label>
<Campo id="cidade" />

<LinhaDupla>
  <div>
    <Label htmlFor="cep">CEP</Label>
    <CampoMenor id="cep" />
  </div>
  <div>
    <Label htmlFor="numero">Número</Label>
    <CampoMenor id="numero" />
  </div>
</LinhaDupla>

<Label htmlFor="complemento">Complemento</Label>
<Campo id="complemento" />

          <BotaoConfirmar onClick={onContinuarPagamento}>Continuar com o pagamento</BotaoConfirmar>
          <BotaoVoltar onClick={onVoltar}>Voltar para carrinho</BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Entrega;