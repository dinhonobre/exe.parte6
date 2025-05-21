import React from "react";
import {
  Card,
  Descricao,
  Imagem,
  TituloNota,
  Nota,
  Estrela,
  Titulo,
  Botao,
  Categoria,
} from "./styles";
import estrela from "../../assets/star_favorite.png";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  imagem: string;
  titulo: string;
  nota: number | undefined;
  descricao: string;
  categoria?: string;
  endereco?: string;
}

const RestauranteCard = ({
  id,
  imagem,
  titulo,
  nota,
  descricao,
  categoria,
  endereco,
}: Props) => {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <Imagem src={imagem} alt={titulo} />
        {categoria && <Categoria>{categoria}</Categoria>}
      </div>
      <TituloNota>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {nota !== undefined ? `${nota.toFixed(1)} ` : "N/A "}
          <Estrela src={estrela} alt="Estrela" />
        </Nota>
      </TituloNota>
      <Descricao>{descricao}</Descricao>
      {endereco && (
        <p style={{ margin: "0.5rem 0", fontStyle: "italic" }}>{endereco}</p>
      )}
      <Link to={`/perfil/${id}`} style={{ textDecoration: "none" }}>
  <Botao>Saiba mais</Botao>
</Link>

    </Card>
  );
};

export default RestauranteCard;
