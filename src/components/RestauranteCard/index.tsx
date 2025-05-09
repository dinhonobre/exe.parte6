import React from 'react';
import { Card, Descricao, Imagem, TituloNota, Nota, Estrela, Titulo, Botao, Categoria } from './styles';
import estrela from '../../assets/star_favorite-[#1499].png';

interface Props {
  imagem: string;
  titulo: string;
  nota: number | undefined; // Alterado para permitir undefined
  descricao: string;
  categoria?: string;
}

const RestauranteCard = ({ imagem, titulo, nota, descricao, categoria }: Props) => {
  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <Imagem src={imagem} alt={titulo} />
        {categoria && <Categoria>{categoria}</Categoria>}
      </div>
      <TituloNota>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {nota !== undefined ? nota.toFixed(1) : 'N/A'} <Estrela src={estrela} alt="Estrela" />
        </Nota>
      </TituloNota>
      <Descricao>{descricao}</Descricao>
      <Botao>Saiba mais</Botao>
    </Card>
  );
};

export default RestauranteCard;
