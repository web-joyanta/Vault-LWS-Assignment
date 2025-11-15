import BookmarkCard from "./BookmarkCard";

const BookmarkGrid = ({ formData }) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {formData.map((data) => (
                <BookmarkCard key={data.id} data={data} />
            ))}
        </div>
    );
};

export default BookmarkGrid;