import { useEffect, useRef, useState } from "react";

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'inr',
    amountDisabled = false,
    currencyDisabled = false,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (currencyDisabled) {
            setIsMenuOpen(false);
        }
    }, [currencyDisabled]);

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (!dropdownRef.current?.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("touchstart", handlePointerDown);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("touchstart", handlePointerDown);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSelectCurrency = (currency) => {
        if (currencyDisabled) return;

        onCurrencyChange && onCurrencyChange(currency);
        setIsMenuOpen(false);
    };

    const currencyList = currencyOptions.map((option) => {
        const isSelected = option === selectedCurrency;

        return (
            <li key={option}>
                <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCurrency(option)}
                    className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                        isSelected
                            ? "bg-emerald-500 text-slate-950"
                            : "text-slate-100 hover:bg-slate-800 hover:text-white"
                    }`}
                >
                    {option.toUpperCase()}
                </button>
            </li>
        );
    });

  return (
    <>
        <div
            className={`relative z-0 flex w-full items-end justify-between gap-3 rounded-2xl bg-grey p-4 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-lg ${
                isMenuOpen ? "overflow-visible z-30" : ""
            }`}
        >

            {/* LEFT */}
                <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-sm mb-1">{label}</p>

                    <input
                    className="w-full bg-transparent text-2xl font-semibold outline-none placeholder:text-gray-500 sm:max-w-[12rem] sm:text-3xl"
                    disabled={amountDisabled}
                    inputMode="decimal"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e)=> onAmountChange &&
                        onAmountChange(e.target.value)}
                    />
                </div>

            {/* RIGHT */}
                <div className="w-[8.5rem] shrink-0 text-right sm:w-auto">
                    <p className="mb-1 text-sm text-gray-400">Currency Type</p>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            disabled={currencyDisabled}
                            aria-haspopup="listbox"
                            aria-expanded={isMenuOpen}
                            onClick={() => !currencyDisabled && setIsMenuOpen((open) => !open)}
                            className="flex w-full items-center justify-between gap-2 rounded-xl border border-emerald-300/70 bg-slate-100 px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[7.5rem]"
                        >
                            <span>{selectedCurrency.toUpperCase()}</span>
                            <svg
                                className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {isMenuOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[2px] sm:hidden"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex min-h-full items-center justify-center p-4">
                                        <div
                                            className="w-full max-w-[18rem] overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900/95 shadow-2xl ring-1 ring-black/25"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            <div className="border-b border-slate-700 px-4 py-3 text-left text-sm font-semibold text-slate-200">
                                                Select currency
                                            </div>
                                            <ul
                                                role="listbox"
                                                aria-label="Currency options"
                                                className="max-h-64 overflow-y-auto p-2 [scrollbar-color:#10b981_#1e293b] [scrollbar-width:thin]"
                                            >
                                                {currencyList}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-0 z-40 mt-2 hidden w-40 overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900/95 shadow-2xl ring-1 ring-black/25 backdrop-blur-xl sm:block">
                                    <ul
                                        role="listbox"
                                        aria-label="Currency options"
                                        className="max-h-44 overflow-y-auto p-1 [scrollbar-color:#10b981_#1e293b] [scrollbar-width:thin]"
                                    >
                                        {currencyList}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>

        </div>
    </>
  )
}

export default InputBox
