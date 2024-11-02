import { useCallback, useLayoutEffect, useRef, useState } from "react";

export const useStorage = (key: string) => {
  if (!key) {
    throw new Error("useStorage에는 키가 반드시 필요합니다.");
  }

  const initializer = useRef((key: string) => {
    const localStorageItem = localStorage.getItem(key);

    if (localStorageItem !== null) {
      if (typeof localStorageItem === "string") {
        return localStorageItem;
      }
      return JSON.parse(localStorageItem);
    }
    return undefined;
  });

  const [value, setValue] = useState<string | undefined>(() =>
    initializer.current(key)
  );

  useLayoutEffect(() => setValue(initializer.current(key)), [key]);

  const set = useCallback(
    (item: string) => {
      localStorage.setItem(key, item);
      setValue(item);
    },
    [key, setValue]
  );

  const remove = useCallback(() => {
    localStorage.removeItem(key);
    setValue(undefined);
  }, [key, setValue]);

  return { value, set, remove };
};
