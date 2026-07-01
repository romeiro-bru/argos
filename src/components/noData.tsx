import type React from "react";

interface NoDataProps {
  text: string;
  supportText?: React.ReactNode;
}

export function NoData({ text, supportText }: NoDataProps) {
  return (
    <div className="flex flex-col text-[var(--gray)] items-center">
      <div className="rounded-full bg-[#fefefe14] p-8 shadow-[var(--shadow)] shadow-lg mb-4">
        <img
          className="w-30 lg:w-50 border-color-[var(--border)] border-rounded"
          src="/sleep.png"
          alt="dog sleeping"
        />
      </div>

      <span className="text-lg font-semibold italic">{text}</span>
      <span className="text-sm italic">{supportText}</span>
    </div>
  );
}
