import { useCallback, useRef } from "react";

/**
 * Кастомный хук, который замедляет выполнение заданной функции обратного вызова.
 *
 * @param {(...args: any[]) => void} callback - Функция обратного вызова, которую необходимо замедлить
 * @param {number} delay - Задержка в миллисекундах для замедления
 * @return {(...args: any[]) => void} Замедленная функция обратного вызова
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  return useCallback((...args: any[]) => {
    callback(...args);
    throttleRef.current = true;

    setTimeout(() => {
      throttleRef.current = false;
    }, delay);
  }, [callback, delay]);
}
