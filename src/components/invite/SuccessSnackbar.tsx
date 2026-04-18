type SuccessSnackbarProps = {
  isVisible: boolean;
  message: string;
};

export function SuccessSnackbar({ isVisible, message }: SuccessSnackbarProps) {
  return (
    <div
      aria-live="polite"
      role="status"
      className={`pointer-events-none fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white/95 px-4 py-3 shadow-soft backdrop-blur-sm transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0"
      }`}
    >
      <p className="text-sm font-semibold text-emerald-700">{message}</p>
    </div>
  );
}
