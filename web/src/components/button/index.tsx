import { ComponentProps } from "react";

export function Button({ ...rest }: ComponentProps<"button">) {
  return (
    <button
      className="w-full bg-red-500 py-2 px-6 text-white font-semibold rounded-md hover:bg-red-700 active:bg-red-600"
      {...rest}
    />
  );
}
