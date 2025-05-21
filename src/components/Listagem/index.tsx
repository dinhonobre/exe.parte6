import React, { useState, useEffect } from 'react';
import RestauranteCard from "../../components/RestauranteCard";
import { ListagemContainer } from "./styles";
import { getRestaurantes } from '../../services/api';
import { Restaurante } from '../../types';

const Listagem = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const carregarRestaurantes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: Restaurante[] = await getRestaurantes();
        
        const produtosComPreco = data.map((restaurante) => ({
          ...restaurante,
          preco: "39.90"
        }));

        setRestaurantes(produtosComPreco);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarRestaurantes();
  }, []);

  if (loading) return <p>Carregando restaurantes...</p>;
  if (error) return <p>Erro ao carregar restaurantes: {error}</p>;

  return (
    <ListagemContainer>
      {restaurantes.map((restaurante) => (
        <RestauranteCard
          key={restaurante.id}
          id={Number(restaurante.id)}
          imagem={restaurante.capa}
          titulo={restaurante.titulo}
          nota={restaurante.avaliacao}
          descricao={restaurante.descricao}
          categoria={restaurante.tipo}
        />
      ))}
    </ListagemContainer>
  );
};

export default Listagem;
