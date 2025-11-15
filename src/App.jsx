import { useState } from 'react'
import BookmarkForm from './components/BookmarkForm'
import BookmarkGrid from './components/BookmarkGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchAndSort from './components/SearchAndSort'
import bookmarkFormData from './data/BookmarkData.json'


function App() {
  const [formData, setFormData] = useState(bookmarkFormData);

  return (
    <>
      <Header />
      <BookmarkForm />
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
