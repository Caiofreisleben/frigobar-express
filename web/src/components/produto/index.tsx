import type { ComponentProps } from "react";
import { useState } from "react";
import { ProdutoItemInput } from "./produto-item-input";
import { ProdutoItem } from "./protudo-item";
import { ProdutoSummary } from "./produto-summary";
import { formatCurrencyBRL } from "~/utils/currency";

interface InfoProps {
  description: string;
  price: number;
}

function Root({ ...rest }: ComponentProps<"ul">) {
  return <ul className="space-y-4" {...rest} />;
}

function ItemThumbnail({
  thumbnail,
  ...rest
}: ComponentProps<"span"> & { thumbnail: string }) {
  return (
    <span className="text-xl" {...rest}>
      {thumbnail}
    </span>
  );
}

function ItemDescription({ ...rest }: ComponentProps<"p">) {
  return <p className="flex flex-1" {...rest} />;
}

function ItemInfo({ description, price }: InfoProps) {
  return (
    <div className="flex flex-col flex-1">
      <p className="font-semibold">{description}</p>
      <span>{formatCurrencyBRL(price)}</span>
    </div>
  );
}

export const Produto = Object.assign(Root, {
  Root,
  ItemThumbnail,
  ItemDescription,
  ItemInfo,
  Item: ProdutoItem,
  ItemInput: ProdutoItemInput,
  Summary: ProdutoSummary,
});
