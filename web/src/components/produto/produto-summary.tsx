"use client";

import { useCarrinho } from "~/store/carrinho";
import { formatCurrencyBRL } from "~/utils/currency";

export function ProdutoSummary() {
  const produtosTotal = useCarrinho((state) =>
    state.produtos.reduce((acc, current) => {
      const totalProduto = current.valor * current.quantidade;
      return totalProduto + acc;
    }, 0)
  );

  return (
    <div className="flex flex-1 justify-center">
      <span className="text-4xl font-semibold">
        {formatCurrencyBRL(produtosTotal)}
      </span>
    </div>
  );
}
