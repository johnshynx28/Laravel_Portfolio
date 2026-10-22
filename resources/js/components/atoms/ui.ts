// Shared Tailwind class strings (buttons + inputs) so the look stays consistent.
const btn =
    'inline-flex cursor-pointer items-center gap-2 rounded-[5px] px-[18px] py-[9px] text-[11px] font-semibold uppercase tracking-[1.2px] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

export const btnPrimary = `${btn} border border-[#c8a96e] bg-[#c8a96e] text-[#0d0e12] hover:bg-[#d4b87a]`;
export const btnGhost = `${btn} border border-white/[0.08] bg-transparent text-[#8b8d97] hover:border-[#4f8fa8] hover:text-[#4f8fa8]`;
export const btnEdit = `${btn} border border-[#4f8fa8]/40 bg-transparent text-[#4f8fa8] hover:bg-[#4f8fa8]/10`;
export const btnDanger = `${btn} border border-[#e05555]/40 bg-transparent text-[#e05555] hover:bg-[#e05555]/10`;

const inputBase =
    'w-full rounded-lg border bg-white/[0.04] px-3.5 py-3 text-sm text-[#f0ece4] outline-none transition-colors placeholder:text-[#4e5060] focus:border-[#c8a96e]';

export const inputClass = (error?: string) =>
    `${inputBase} ${error ? 'border-[#ff6b6b]' : 'border-white/[0.08]'}`;
