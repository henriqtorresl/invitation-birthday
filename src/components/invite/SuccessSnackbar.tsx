type SuccessSnackbarProps = {
  isVisible: boolean;
  message: string;
};

export function SuccessSnackbar({ isVisible, message }: SuccessSnackbarProps) {
  return (
    <div
      aria-live="polite"
      role="status"
      className={`pointer-events-none fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-r from-white/95 via-rose-50/95 to-peach-100/95 px-4 py-3 shadow-soft backdrop-blur-sm transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-berry-500 to-sunset-peach" />
      <p className="pt-1 text-sm font-semibold text-berry-700 sm:text-[0.95rem]">
        {message}
      </p>
    </div>
  );
}
