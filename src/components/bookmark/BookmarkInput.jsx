
const BookmarkInput = ({ bookmark, handleChange }) => {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* <!-- Website URL Input --> */}
            <label
                className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
            >
                <span
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                >
                    Website URL
                </span>
                <input
                    type="url"
                    name="url"
                    value={bookmark.url}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                    required
                />
                <span className="text-xs text-neutral-500"
                >Include https:// for best results.</span
                >
            </label>

            {/* <!-- Color Picker --> */}
            <div
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <p
                            className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                        >
                            Favicon color
                        </p>
                        <p className="text-xs text-neutral-500">
                            Select the accent color we should
                            render.
                        </p>
                    </div>
                    <input
                        type="color"
                        name="color"
                        value={bookmark.color}
                        onChange={handleChange}
                        className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                        required
                    />
                </div>
                <div
                    className="mt-5 flex items-center gap-3 text-xs text-neutral-500"
                >
                    <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400"
                    >
                        Hex
                    </span>
                    <span>Matches any brand primary color.</span>
                </div>
            </div>

            {/* <!-- Category Select --> */}
            <label
                className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
            >
                <span
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                >
                    Category
                </span>
                <select name="category" value={bookmark.category} onChange={handleChange}
                    className="w-full bg-transparent text-base text-white outline-none" required
                >
                    <option value="" className="bg-neutral-900 text-white">
                        Select category
                    </option>
                    <option value="social" className="bg-neutral-900 text-white">
                        Social
                    </option>
                    <option value="video" className="bg-neutral-900 text-white">
                        Video
                    </option>
                    <option value="design" className="bg-neutral-900 text-white">
                        Design
                    </option>
                    <option value="streaming" className="bg-neutral-900 text-white">
                        Streaming
                    </option>
                    <option value="productivity" className="bg-neutral-900 text-white">
                        Productivity
                    </option>
                    <option value="entertainment" className="bg-neutral-900 text-white">
                        Entertainment
                    </option>
                    <option value="shopping" className="bg-neutral-900 text-white">
                        Shopping
                    </option>
                    <option value="music" className="bg-neutral-900 text-white">
                        Music
                    </option>
                </select>
                <span className="text-xs text-neutral-500">
                    Helps you filter quicker later.
                </span>
            </label>
        </div>
    );
};

export default BookmarkInput;