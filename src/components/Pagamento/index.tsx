import React, { useState } from "react";
import {
  TopoPagamento,
  Valor,
  BotaoConfirmar,
  BotaoVoltar,
  Campo,
  CampoMenor,
  Form,
  LinhaDupla,
  Overlay,
  SidebarEntrega,
  Titulo,
  Label,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";

type Props = {
  onFecharPagamento: () => void;
  onVoltarParaEntrega: () => void;
  onPedidoConfirmado: (id: string) => void;
};

interface RespostaPedido {
  orderId: string;
}

const Pagamento: React.FC<Props> = ({
  onFecharPagamento,
  onVoltarParaEntrega,
  onPedidoConfirmado,
}) => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens);

  const total = itensCarrinho.reduce(
    (soma, item) => soma + Number(item.preco),
    0
  );

  // Estados dos campos
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [cvv, setCvv] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const enviarPedido = async () => {
    // Validações específicas
    if (!nome.trim()) {
      alert("Por favor, preencha o nome no cartão.");
      return;
    }

    if (numero.length !== 16) {
      alert("O número do cartão deve conter exatamente 16 dígitos.");
      return;
    }

    if (cvv.length !== 3) {
      alert("O CVV deve conter exatamente 3 dígitos.");
      return;
    }

    const mesNum = Number(mes);
    if (mes.length !== 2 || mesNum < 1 || mesNum > 12) {
      alert("O mês de vencimento deve ser um número entre 01 e 12.");
      return;
    }

    if (ano.length !== 4 || Number(ano) < new Date().getFullYear()) {
      alert("O ano de vencimento deve conter 4 dígitos válidos.");
      return;
    }

    const pedido = {
      products: itensCarrinho.map((item) => ({
        id: item.id,
        price: item.preco,
      })),
      payment: {
        card: {
          name: nome,
          number: numero,
          code: Number(cvv),
          expires: {
            month: mesNum,
            year: Number(ano),
          },
        },
      },
    };

    try {
      const resposta = await axios.post<RespostaPedido>(
        "https://ebac-fake-api.vercel.app/api/efood/checkout",
        pedido
      );
      console.log("Pedido confirmado:", resposta.data);
      onPedidoConfirmado(resposta.data.orderId);
    } catch (erro) {
      console.error("Erro ao enviar pedido:", erro);
      alert("Erro ao finalizar o pagamento.");
    }
  };

  return (
    <Overlay onClick={onFecharPagamento}>
      <SidebarEntrega onClick={(e) => e.stopPropagation()}>
        <TopoPagamento>
          <Titulo>Pagamento</Titulo>
          <Valor>Total a pagar: R$ {total.toFixed(2)}</Valor>
        </TopoPagamento>

        <Form>
          <Label htmlFor="nomeCartao">Nome no Cartão</Label>
          <Campo
            id="nomeCartao"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <LinhaDupla>
            <div style={{ flex: 2 }}>
              <Label htmlFor="numeroCartao">Número do Cartão</Label>
              <Campo
                id="numeroCartao"
                inputMode="numeric"
                pattern="\d*"
                maxLength={19} // 16 dígitos + 3 espaços
                value={numero}
                onChange={(e) => {
                  let valor = e.target.value.replace(/\D/g, "").slice(0, 16);
                  valor = valor.replace(/(.{4})/g, "$1 ").trim();
                  setNumero(valor);
                }}
              />
            </div>
            <div style={{ flex: 1, marginLeft: "8px" }}>
              <Label htmlFor="cvv">CVV</Label>
              <Campo
                id="cvv"
                inputMode="numeric"
                pattern="\d*"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </LinhaDupla>

          <LinhaDupla>
            <div style={{ flex: 1 }}>
              <Label htmlFor="mes">Mês de vencimento</Label>
              <CampoMenor
                id="mes"
                inputMode="numeric"
                pattern="\d*"
                maxLength={2}
                value={mes}
                onChange={(e) => setMes(e.target.value.replace(/\D/g, ""))}
              />
            </div>
            <div style={{ flex: 1, marginLeft: "8px" }}>
              <Label htmlFor="ano">Ano de vencimento</Label>
              <CampoMenor
                id="ano"
                inputMode="numeric"
                pattern="\d*"
                maxLength={4}
                value={ano}
                onChange={(e) => setAno(e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </LinhaDupla>

          <BotaoConfirmar type="button" onClick={enviarPedido}>
            Finalizar Pagamento
          </BotaoConfirmar>
          <BotaoVoltar onClick={onVoltarParaEntrega}>
            Voltar para Edição de Endereço
          </BotaoVoltar>
        </Form>
      </SidebarEntrega>
    </Overlay>
  );
};

export default Pagamento;
