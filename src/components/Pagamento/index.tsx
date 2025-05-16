import React from "react";
import { TopoPagamento, Valor, BotaoConfirmar, BotaoVoltar, Campo, CampoMenor, Form, LinhaDupla, Overlay, SidebarEntrega, Titulo, Label } from "./styles";
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
type Props = {
  onFecharPagamento: () => void;
  onConfirmarPagamento: () => void;
  onVoltarParaEntrega: () => void;
};

const Pagamento: React.FC<Props> = ({
  onFecharPagamento,
  onConfirmarPagamento,
  onVoltarParaEntrega
}) => { const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const total = itensCarrinho.reduce((soma, item) => {
    return soma + Number(item.preco) // faz cast se o preço estiver como string
  }, 0)
  return (
    <Overlay onClick={onFecharPagamento}>
      <SidebarEntrega onClick={(e) => e.stopPropagation()}>
        <TopoPagamento>
          <Titulo>Pagamento</Titulo>
          <Valor>Total a pagar: R$ {total.toFixed(2)}</Valor>
        </TopoPagamento>

        <Form>
          {/* 3. Nome no Cartão */}
          <Label htmlFor="nomeCartao">Nome no Cartão</Label>
          <Campo id="nomeCartao" placeholder="" />

          {/* 4. Número do Cartão e 5. CVV ao lado */}
          <LinhaDupla>
            <div style={{ flex: 2 }}>
              <Label htmlFor="numeroCartao">Número do Cartão</Label>
              <Campo id="numeroCartao" placeholder="" />
            </div>
            <div style={{ flex: 1, marginLeft: '8px' }}>
              <Label htmlFor="cvv">CVV</Label>
              <Campo id="cvv" placeholder="" />
            </div>
          </LinhaDupla>

          {/* 6. Mês e Ano de vencimento lado a lado */}
          <LinhaDupla>
            <div style={{ flex: 1 }}>
              <Label htmlFor="mes">Mês de vencimento</Label>
              <CampoMenor id="mes" placeholder="" />
            </div>
            <div style={{ flex: 1, marginLeft: '8px' }}>
              <Label htmlFor="ano">Ano de vencimento</Label>
              <CampoMenor id="ano" placeholder="" />
            </div>
          </LinhaDupla>

          {/* 7. Botões */}
          <BotaoConfirmar onClick={onConfirmarPagamento}>
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
