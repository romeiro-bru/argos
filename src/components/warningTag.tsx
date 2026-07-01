export function WarningTag({ message }: { message: string }) {
  return (
    <p className="flex w-fit m-auto gap-2 items-center font-semibold text-xs text-[var(--subtitle)] border bg-[#fff] rounded-sm p-2 mb-8">
      <img src="/user-yellow.png" className="h-4" />
      {message}
    </p>
  );
}
