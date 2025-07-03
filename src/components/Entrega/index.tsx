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
  Titulo,
} from "./styles";

type Props = {
  onVoltar: () => void;
  onContinuarPagamento: () => void;
};

const Entrega: React.FC<Props> = ({ onVoltar, onContinuarPagamento }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const validarEntrega = () => {
    const cepNumerico = cep.replace(/\D/g, ""); // remove o hífen
    const numeroNumerico = numero.replace(/\D/g, "");

    if (!nome.trim()) {
      alert("Por favor, preencha o nome de quem irá receber.");
      return;
    }

    if (!endereco.trim()) {
      alert("Por favor, preencha o endereço.");
      return;
    }

    if (!cidade.trim()) {
      alert("Por favor, preencha a cidade.");
      return;
    }

    if (cepNumerico.length !== 8) {
      alert("O CEP deve conter exatamente 8 dígitos.");
      return;
    }

    if (!numeroNumerico.trim()) {
      alert("Por favor, preencha o número do endereço.");
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
                inputMode="numeric"
                pattern="\d*"
                maxLength={9} // inclui o hífen
                value={cep}
                onChange={(e) => {
                  let valor = e.target.value.replace(/\D/g, "").slice(0, 8);
                  if (valor.length > 5) {
                    valor = valor.replace(/^(\d{5})(\d{1,3})/, "$1-$2");
                  }
                  setCep(valor);
                }}
              />
            </div>
            <div>
              <Label htmlFor="numero">Número</Label>
              <CampoMenor
                id="numero"
                inputMode="numeric"
                pattern="\d*"
                maxLength={6}
                value={numero}
                onChange={(e) => setNumero(e.target.value.replace(/\D/g, ""))}
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
