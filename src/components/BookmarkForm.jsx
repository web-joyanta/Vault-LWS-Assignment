import { useState } from "react";
import ActionButton from "./bookmark/ActionButton";
import BookmarkInput from "./bookmark/BookmarkInput";
import BookmarkUserInput from "./bookmark/BookmarkUserInput";

const BookmarkForm = () => {
    
    const getCurrentDate = () => {
        const date = new Date();
        return date.toISOString().split("T")[0];
    };

    const [bookmark, setBookmark] = useState({
        id: crypto.randomUUID(),
        url: "",
        color: "#3b82f6",
        category: "",
        username: "",
        password: "",
        createdAt: getCurrentDate(),
    })

    const handleChange = (e) => {
        const name = e.target.name;
        let value = (e.target.value);
        console.log(value);

        setBookmark({
            ...bookmark,
            [name]: value,
        })
    }
    return (
        <div className="max-w-7xl mx-auto mt-8 px-4">
            <form
                className="mb-10 rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="mb-8 flex flex-col gap-3">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400"
                    >
                        New bookmark
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Store website credentials safely
                    </h2>
                    <p className="text-sm text-neutral-400">
                        Fill the details below. Your brand color helps us render
                        a matching favicon.
                    </p>
                </div>
                <div className="space-y-6">
                    <BookmarkInput bookmark={bookmark} handleChange={handleChange} />
                    <BookmarkUserInput bookmark={bookmark} handleChange={handleChange} />
                </div>
                <ActionButton />
            </form>
        </div>
    );
};

export default BookmarkForm;