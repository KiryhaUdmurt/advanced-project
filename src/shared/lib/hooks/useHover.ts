import { useCallback, useMemo, useState } from "react";

interface useHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, useHoverBind];

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo(
    () => [isHovered, { onMouseEnter, onMouseLeave }] as UseHoverResult,
    [isHovered, onMouseEnter, onMouseLeave]
  );
};
