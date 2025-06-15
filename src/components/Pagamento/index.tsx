import React, { useState } from "react"
import {
  TopoPagamento, Valor, BotaoConfirmar, BotaoVoltar, Campo, CampoMenor,
  Form, LinhaDupla, Overlay, SidebarEntrega, Titulo, Label
} from "./styles"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import axios from 'axios'

type Props = {
  onFecharPagamento: () => void
  onVoltarParaEntrega: () => void
  onPedidoConfirmado: (id: string) => void
}

interface RespostaPedido {
  orderId: string;
}

const Pagamento: React.FC<Props> = ({
  onFecharPagamento,
  onVoltarParaEntrega,
  onPedidoConfirmado
}) => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const total = itensCarrinho.reduce((soma, item) => soma + Number(item.preco), 0)

  // Estados dos campos
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [cvv, setCvv] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  const enviarPedido = async () => {
    // Validação dos campos obrigatórios
    if (!nome || !numero || !cvv || !mes || !ano) {
      alert("Por favor, preencha todos os campos obrigatórios do pagamento.")
      return
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
            month: Number(mes),
            year: Number(ano),
          },
        },
      },
    };

    try {
      const resposta = await axios.post<RespostaPedido>(
        "https://fake-api-tau.vercel.app/api/efood/checkout",
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
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
            <div style={{ flex: 1, marginLeft: '8px' }}>
              <Label htmlFor="cvv">CVV</Label>
              <Campo
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </LinhaDupla>

          <LinhaDupla>
            <div style={{ flex: 1 }}>
              <Label htmlFor="mes">Mês de vencimento</Label>
              <CampoMenor
                id="mes"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
              />
            </div>
            <div style={{ flex: 1, marginLeft: '8px' }}>
              <Label htmlFor="ano">Ano de vencimento</Label>
              <CampoMenor
                id="ano"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
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
  )
}

export default Pagamento
