import { useLayoutEffect, useState } from "react";

export const useStorage = (key: string) => {
  if (!key) {
    throw new Error("useStorage must need the key");
  }

  const [value, setValue] = useState<string | null>(null);

  useLayoutEffect(() => {}, []);

  return value;
};
