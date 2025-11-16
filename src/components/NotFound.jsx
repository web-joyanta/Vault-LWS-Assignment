import { LuFileQuestion } from "react-icons/lu";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="rounded-3xl border border-neutral-800  from-neutral-900/80 to-neutral-900/40 p-12 text-center max-w-md">
                <LuFileQuestion className="w-16 h-16 mx-auto mb-4 text-neutral-500" />
                <h3 className="text-xl font-semibold text-neutral-300 mb-2">
                    No bookmarks found
                </h3>
                <p className="text-sm text-neutral-500">
                    Try adjusting your search terms or add a new bookmark to get started.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
