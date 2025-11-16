import { useState } from "react";

const SortButton = ({ onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sortOptions = [
        { label: "Name (A-Z)", value: "name-asc" },
        { label: "Name (Z-A)", value: "name-desc" },
        { label: "Date (Oldest)", value: "date-asc" },
        { label: "Date (Newest)", value: "date-desc" },
    ];

    const handleSortClick = (option) => {
        onSortChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-8 8v6l-4 4v-8z" />
                </svg>
                Sort by
            </button>

            {isOpen && (
                <ul className="absolute mt-2 w-40 rounded-md border border-neutral-700 bg-neutral-900 shadow-lg z-10">
                    {sortOptions.map((option) => (
                        <li
                            key={option.value}
                            className="cursor-pointer px-4 py-2 text-sm text-neutral-300 hover:bg-blue-500 hover:text-white"
                            onClick={() => handleSortClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortButton;
