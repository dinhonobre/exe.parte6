import { Restaurante } from '../types';

const API_BASE_URL = 'https://ebac-fake-api.vercel.app/api/efood';

export const getRestaurantes = async (): Promise<Restaurante[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurantes`); // URL Corrigida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data: Restaurante[] = await response.json();
    return data;
  } catch (error: any) {
    console.error('Erro ao buscar restaurantes:', error);
    throw error;
  }
};
