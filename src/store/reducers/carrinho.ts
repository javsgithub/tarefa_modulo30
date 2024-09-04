import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[],
  favoritos: Produto[]
}

const initialState: carrinhoState = {
  itens: [],
  favoritos: []
}

// type favoritoState = {favoritos: Produto[]}

const carrinhoSlice = createSlice({
  name:'carrinho',
  initialState,
  reducers:{
    adicionarAoCarrinho:(state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if(state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((p) => p.id === favorito.id)) {
        const favoritosSemProduto = state.favoritos.filter((p) => p.id !== favorito.id)
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(favorito)
      }
    }
  }
})

export const { adicionarAoCarrinho,favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
