type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-berry-600">
        <span>Progresso</span>
        <span>
          {currentStep}/{totalSteps}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-rose-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-berry-500 to-sunset-peach transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
