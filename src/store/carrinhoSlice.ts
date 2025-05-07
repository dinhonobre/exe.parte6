import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemCarrinho {
  id: number;
  titulo: string;
  preco: string;
  imagem: string;
  // Adicione outras propriedades conforme necessário
}

interface CarrinhoState {
  itens: ItemCarrinho[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ItemCarrinho>) => {
      state.itens.push(action.payload);
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload);
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;