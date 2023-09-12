"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Produto, useCarrinho, useProdutoQuantidade } from "~/store/carrinho";

interface Props extends ComponentProps<"input"> {
  produto: Produto;
}

export function ProdutoItemInput({ children, produto, ...rest }: Props) {
  const value = useProdutoQuantidade(produto.id);

  const increment = useCarrinho((state) => state.increment);
  const decrement = useCarrinho((state) => state.decrement);

  function handleIncrement() {
    increment(produto);
  }

  function handleDecrement() {
    decrement(produto);
  }

  return (
    <div className="bg-white flex items-center rounded p-1">
      <button className="text-red-500 p-1" onClick={handleDecrement}>
        <MinusIcon />
      </button>
      <input
        type="number"
        className="appearance-none outline-none w-10 text-center"
        value={value}
        {...rest}
      >
        {children}
      </input>
      <button className="text-red-500 p-1" onClick={handleIncrement}>
        <PlusIcon />
      </button>
    </div>
  );
}
