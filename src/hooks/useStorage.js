import { useState } from "react";

export default function useStorage(key, defaultValue) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      }

      window.localStorage.setItem(key, JSON.stringify(defaultValue));

      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }

    setStorageValue(newValue);
  };

  return [storageValue, setValue];
}
