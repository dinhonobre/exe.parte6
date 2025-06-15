import React, { useState } from "react";
import {
  Label,
  BotaoConfirmar,
  BotaoVoltar,
  Campo,
  CampoMenor,
  Form,
  LinhaDupla,
  Overlay,
  SidebarEntrega,
  Titulo
} from "./styles";

type Props = {
  onVoltar: () => void;
  onContinuarPagamento: () => void;
};

const Entrega: React.FC<Props> = ({ onVoltar, onContinuarPagamento }) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  const validarEntrega = () => {
    if (!nome || !endereco || !cidade || !cep || !numero) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    onContinuarPagamento();
  };

  return (
    <Overlay>
      <SidebarEntrega>
        <Titulo>Entrega</Titulo>
        <Form>
          <Label htmlFor="nome">Quem irá receber</Label>
          <Campo
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Label htmlFor="endereco">Endereço</Label>
          <Campo
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <Label htmlFor="cidade">Cidade</Label>
          <Campo
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <LinhaDupla>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <CampoMenor
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="numero">Número</Label>
              <CampoMenor
                id="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
          </LinhaDupla>

          <Label htmlFor="complemento">Complemento (Opcional)</Label>
          <Campo
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />

          <BotaoConfirmar type="button" onClick={validarEntrega}>
            Continuar com o pagamento
          </BotaoConfirmar>
          <BotaoVoltar onClick={onVoltar}>Voltar para carrinho</BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Entrega;
