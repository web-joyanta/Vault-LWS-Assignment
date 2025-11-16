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
  const [errors, setErrors] = useState({
    url: "",
    category: "",
    username: "",
    password: ""
  });

  const handleAddBookmark = (newBookMart) => {
    const { url, category, username, password } = newBookMart;

    const newErrors = {};
    if (!url) newErrors.url = "Please enter a valid URL.";
    else if (!/^https?:\/\//i.test(url)) {
      newErrors.url = "URL must start with http://";
    }
    if (!category) newErrors.category = "Please select a category.";
    if (!username) newErrors.username = "Username cannot be empty.";
    if (!password) newErrors.password = "Password must be at least 6 characters.";
    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData([...formData, newBookMart]);
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

  return (
    <>
      <Header />
      <BookmarkForm handleAddBookmark={handleAddBookmark} errors={errors} setErrors={setErrors} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchAndSort setSearchTerm={setSearchTerm} />
          {filteredBookmarks.length > 0 ? (
            <BookmarkGrid formData={filteredBookmarks} />
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
