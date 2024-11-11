import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import TokenStorage from "../libs/storage";

export const useStorage = (key: string) => {
  const storage: TokenStorage = useMemo(() => {
    return new TokenStorage(key);
  }, [key]);

  if (!key) {
    throw new Error(
      "[useStorage] Storage를 이용하기 위해서는 키가 반드시 필요합니다."
    );
  }

  const initializer = useRef(() => {
    const storageItem = storage.getToken();

    if (storageItem !== null) {
      if (typeof storageItem === "string") {
        return storageItem;
      }
      return JSON.parse(storageItem);
    }
    return null;
  });

  const [value, setValue] = useState<string | null>(() =>
    initializer.current()
  );

  useLayoutEffect(() => setValue(initializer.current()), [key]);

  const set = useCallback(
    (item: string) => {
      storage.setToken(item);
      setValue(item);
    },
    [storage]
  );

  const remove = useCallback(() => {
    storage.removeToken();
    setValue(null);
  }, [storage]);

  return { value, set, remove };
};
