type SuccessSnackbarProps = {
  isVisible: boolean;
  message: string;
};

export function SuccessSnackbar({ isVisible, message }: SuccessSnackbarProps) {
  return (
    <div
      aria-live="polite"
      role="status"
      className={`pointer-events-none fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-rose-200/80 bg-white/92 px-4 py-2.5 shadow-soft backdrop-blur-sm transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0"
      }`}
    >
      <p className="text-center text-sm font-semibold text-berry-700 sm:text-[0.95rem]">
        {message}
      </p>
    </div>
  );
}
