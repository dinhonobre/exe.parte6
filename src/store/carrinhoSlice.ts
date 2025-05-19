import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemCarrinho {
  id: number;
  titulo: string;
  preco: string;
  imagem: string;
  quantidade: number;
}

interface CarrinhoState {
  itens: ItemCarrinho[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ItemCarrinho>) => {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload.id
      );

      if (produtoExistente) {
        produtoExistente.quantidade += 1; // ⬅️ Aqui que a mágica acontece
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 });
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload
      );
      if (produtoExistente) {
        if (produtoExistente.quantidade > 1) {
          produtoExistente.quantidade -= 1;
        } else {
          state.itens = state.itens.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
