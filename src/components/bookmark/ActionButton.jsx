
const ActionButton = () => {
    return (
        <div
            className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
            <div className="text-xs text-neutral-500">
                By submitting you confirm the entry is safe to store.
            </div>
            <div className="flex flex-1 justify-end gap-3">
                <button
                    type="reset"
                    className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
                >
                    Clear
                </button>
                <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
                >
                    Add Bookmark
                </button>
            </div>
        </div>
    );
};

export default ActionButton;