import { useEffect, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Variant = "success" | "error" | "info";

const variantConfig: Record<
  Variant,
  { icon: typeof faCheck; classes: string }
> = {
  success: {
    icon: faCheck,
    classes: "text-green-400 bg-green-400/10 border-green-400/30",
  },
  error: {
    icon: faExclamationTriangle,
    classes: "text-red-400 bg-red-400/10 border-red-400/30",
  },
  info: {
    icon: faInfoCircle,
    classes: "text-primary bg-primary/10 border-primary/30",
  },
};

export function Popup({
  open,
  onClose,
  title,  
  message,
  variant = "info",
  confirmLabel,
  cancelLabel = "Close",
  onConfirm,
  children,
  dismissible = true,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  variant?: Variant;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  children?: ReactNode;
  dismissible?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const config = variantConfig[variant];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[popupFade_0.2s_ease-out]"
        onClick={() => {
          if (dismissible) onClose();
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.5)] animate-[popupIn_0.25s_ease-out]"
      >
        {dismissible ? (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition hover:text-foreground"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : null}

        <div
          className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border text-2xl ${config.classes}`}
        >
          <FontAwesomeIcon icon={config.icon} />
        </div>

        {title ? (
          <h3 className="font-display text-xl font-bold text-foreground">
            {title}
          </h3>
        ) : null}
        {message ? (
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {message}
          </p>
        ) : null}
        {children}

        {onConfirm || cancelLabel ? (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {onConfirm ? (
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                {confirmLabel ?? "Confirm"}
              </button>
            ) : null}
            {cancelLabel ? (
              <button
                onClick={onClose}
                className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                {cancelLabel}
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
