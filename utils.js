import React, { useEffect } from "react";

const useLocalStorageState = (
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deSerialize = JSON.parse } = {}
) => {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deSerialize(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  useEffect(() => {
    const prevkey = prevKeyRef.current;
    if (prevkey !== key) {
      window.localStorage.removeItem(prevkey);
    }
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};

export { useLocalStorageState };
