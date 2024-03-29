import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIM_DELAY = 150;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const { theme } = useTheme();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIM_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
