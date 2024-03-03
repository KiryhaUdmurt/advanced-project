import { useEffect } from "react";

/**
 * Выполняет предоставленную функцию обратного вызова только один раз при монтировании компонента, если проект не является "storybook".
 *
 * @param {() => void} callback - Функция, которая должна быть выполнена
 * @return {void}
 */
export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
