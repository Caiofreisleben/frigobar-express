import { Button } from "~/components/button";
import { Produto } from "~/components/produto";

export default async function Home() {
  const res = await fetch("http://127.0.0.1:1337/api/produtos", {
    cache: "no-cache",
    headers: {
      Authorization:
        "Bearer 547e32650f226adaeb681b86a7d8624a43cb12bb66932612c8f49e778f8f4272aab4ab904cf0c7854906a1d0c9bcac97e96007b035bdb7eb59b2aa14e3c58c5fa8c5013b69c97f49b2fe8aa2b527a51235743e0ff33c930b11a73e7b909c35c4fe7f97491230f7dbf6609b58e032ff360c3c81975d8cbf65cba52e42d61a090c",
    },
  });

  const produtos = await res.json();

  return (
    <main className="max-w-md w-full p-6">
      <header className="flex flex-col items-center gap-6 my-6">
        <h1 className="text-red-500 font-bold text-4xl">Produtos</h1>
        <p className="text-base">Selecione os produtos</p>
      </header>
      <Produto>
        {produtos?.data?.map((p: any) => {
          console.log("e", p);
          return (
            <Produto.Item key={p} produtoId={p.id}>
              <Produto.ItemThumbnail thumbnail={p.attributes.thumbnail} />

              <Produto.ItemInfo
                description={p.attributes.descricao}
                price={p.attributes.valor}
              />

              <Produto.ItemInput
                name={p.name}
                produto={{ id: p.id, quantidade: 0, valor: p.attributes.valor }}
              />
            </Produto.Item>
          );
        })}
        <Produto.Summary />
      </Produto>
      <div className="h-px bg-gray-200 w-full my-6" />
      <Button>Proximo</Button>
    </main>
  );
}
