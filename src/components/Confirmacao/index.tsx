import React from 'react';
import styled from 'styled-components';
import { OverlayConfirmacao, SidebarConfirmacao, TituloConfirmacao, MensagemConfirmacao, BotaoConcluir } from './styles'; // Importe o BotaoConcluir

interface Props {
  onFecharConfirmacao: () => void;
}

const ConfirmacaoPedido: React.FC<Props> = ({ onFecharConfirmacao }) => {
  const mensagem = `Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br /><br />

Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.<br /><br />

Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br /><br />

Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
`;

  return (
    <OverlayConfirmacao onClick={onFecharConfirmacao}>
      <SidebarConfirmacao onClick={(e) => e.stopPropagation()}>
        <TituloConfirmacao>Pedido Realizado!</TituloConfirmacao>
        <MensagemConfirmacao dangerouslySetInnerHTML={{ __html: mensagem }} />
        <BotaoConcluir onClick={() => {
          onFecharConfirmacao(); 
        }}>
          Concluir
        </BotaoConcluir>
      </SidebarConfirmacao>
    </OverlayConfirmacao>
  );
};

export default ConfirmacaoPedido;