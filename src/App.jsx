import { useState } from 'react';
import BookmarkForm from './components/BookmarkForm';
import BookmarkGrid from './components/BookmarkGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SearchAndSort from './components/SearchAndSort';
import bookmarkFormData from './data/BookmarkData.json';

function App() {
  const [formData, setFormData] = useState(bookmarkFormData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // e.g., 'name-asc', 'name-desc', 'date-asc', 'date-desc'
  const [errors, setErrors] = useState({
    url: "",
    category: "",
    username: "",
    password: ""
  });

  const handleAddBookmark = (newBookmark) => {
    const { url, category, username, password } = newBookmark;

    const newErrors = {};
    if (!url) newErrors.url = "Please enter a valid URL.";
    else if (!/^https?:\/\//i.test(url)) newErrors.url = "URL must start with http://";
    if (!category) newErrors.category = "Please select a category.";
    if (!username) newErrors.username = "Username cannot be empty.";
    if (!password || password.length < 6) newErrors.password = "Password must be at least 6 characters long.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add a date property for sorting by date
    const bookmarkWithDate = { ...newBookmark, createdAt: new Date().toISOString() };

    setFormData([...formData, bookmarkWithDate]);
    setErrors({ url: "", category: "", username: "", password: "" });
  };

  const filteredBookmarks = formData.filter((item) => {
    if (!searchTerm.trim()) return true;
    const lower = searchTerm.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(lower)) ||
      (item.url && item.url.toLowerCase().includes(lower))
    );
  });

  // Sorting logic
 const sortedBookmarks = [...filteredBookmarks].sort((a, b) => {
  const nameA = a.name || a.url; // fallback to URL
  const nameB = b.name || b.url;

  switch (sortOrder) {
    case "name-asc":
      return nameA.localeCompare(nameB);
    case "name-desc":
      return nameB.localeCompare(nameA);
    case "date-asc":
      return new Date(a.createdAt) - new Date(b.createdAt);
    case "date-desc":
      return new Date(b.createdAt) - new Date(a.createdAt);
    default:
      return 0;
  }
});

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  return (
    <>
      <Header />
      <BookmarkForm handleAddBookmark={handleAddBookmark} errors={errors} setErrors={setErrors} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchAndSort setSearchTerm={setSearchTerm} onSortChange={handleSortChange} />
          {sortedBookmarks.length > 0 ? (
            <BookmarkGrid formData={sortedBookmarks} />
          ) : (
            <NotFound />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
