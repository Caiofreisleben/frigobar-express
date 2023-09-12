import { create } from "zustand";

interface State {
  produtos: Produto[];
}

export interface Produto {
  id: number;
  quantidade: number;
  valor: number;
}

interface Action {
  increment: (produto: Produto) => void;
  decrement: (produto: Produto) => void;
}

const initialState: State = {
  produtos: [],
};

export const useCarrinho = create<State & Action>((set, get) => ({
  ...initialState,
  increment: (produto: Produto) => {
    let produtos = [...get().produtos];
    const produtoIndex = produtos.findIndex((p) => p.id == produto.id);

    if (produtoIndex == -1) {
      const newProduto = {
        ...produto,
        quantidade: 1,
      };
      produtos = [...produtos, newProduto];
    } else {
      produtos[produtoIndex].quantidade += 1;
    }

    set({ produtos });
  },
  decrement: (produto: Produto) => {
    let produtos = [...get().produtos];
    const produtoIndex = produtos.findIndex((p) => p.id == produto.id);
    if (produtoIndex == -1) return;

    const quantidade = produtos[produtoIndex].quantidade;

    if (quantidade == 1) {
      produtos = produtos.filter((p) => p.id != produto.id);
    } else {
      produtos[produtoIndex].quantidade -= 1;
    }

    set({ produtos });
  },
}));

export function useProdutoQuantidade(id: number) {
  const produtoQuantidade = useCarrinho(
    (state) => state.produtos.find((p) => p.id == id)?.quantidade
  );
  return produtoQuantidade ?? 0;
}
