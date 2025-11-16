import { useState } from 'react'
import BookmarkForm from './components/BookmarkForm'
import BookmarkGrid from './components/BookmarkGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchAndSort from './components/SearchAndSort'
import bookmarkFormData from './data/BookmarkData.json'


function App() {
  const [formData, setFormData] = useState(bookmarkFormData);
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
  }

  return (
    <>
      <Header />
      <BookmarkForm handleAddBookmark={handleAddBookmark} errors={errors} setErrors={setErrors} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchAndSort />
          <BookmarkGrid formData={formData} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
