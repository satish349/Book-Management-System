import { useState, useEffect } from "react";
import { booksListFile } from "./booksData";

const BookListDisplay = () => {
  const [, setRefresh] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", author: "", genre: "", year: "" });

  // Listens for array changes OR navigation search key-presses
  useEffect(() => {
    const handleUpdateSignal = () => setRefresh((prev) => prev + 1);
    const handleSearchSignal = (e) => setSearchQuery(e.detail);

    window.addEventListener("booksUpdated", handleUpdateSignal);
    window.addEventListener("bookSearch", handleSearchSignal);
    
    return () => {
      window.removeEventListener("booksUpdated", handleUpdateSignal);
      window.removeEventListener("bookSearch", handleSearchSignal);
    };
  }, []);

  // Filter the central memory array layout based on what was typed
  const filteredBooks = booksListFile.filter((book) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true; // Show everything if search is empty

    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.year.toString().includes(query)
    );
  });

  const handleDelete = (id) => {
    const targetIdx = booksListFile.findIndex((book) => book.id === id);
    if (targetIdx !== -1) {
      booksListFile.splice(targetIdx, 1);
      setRefresh((prev) => prev + 1);
    }
  };

  const startEdit = (book) => {
    setEditingId(book.id);
    setEditForm({ ...book });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveUpdate = (id) => {
    const targetIdx = booksListFile.findIndex((book) => book.id === id);
    if (targetIdx !== -1) {
      booksListFile[targetIdx] = { ...editForm };
      setEditingId(null);
      setRefresh((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-xl p-6 bg-slate-900 text-white rounded-lg shadow-md mx-auto">
      <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
        <h2 className="text-xl font-bold text-amber-400">Library Collection</h2>
        <span className="bg-slate-700 text-xs px-2 py-1 rounded-full font-mono">
          Showing: {filteredBooks.length} / {booksListFile.length}
        </span>
      </div>

      {filteredBooks.length === 0 ? (
        <p className="text-sm text-slate-400 italic text-center py-4">
          {booksListFile.length === 0 ? "No books stored yet." : "No matching books found."}
        </p>
      ) : (
        <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-1">
          {filteredBooks.map((book) => (
            <div key={book.id} className="p-3 bg-slate-800 rounded-md border-l-4 border-amber-500 flex flex-col justify-between gap-3">
              {editingId === book.id ? (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <input className="px-3 py-2 rounded text-xs border " type="text" name="title" value={editForm.title} onChange={handleEditChange} />
                  <input className="px-3 py-2 rounded text-xs border " type="text" name="author" value={editForm.author} onChange={handleEditChange} />
                  <input className="px-3 py-2 rounded text-xs border " type="text" name="genre" value={editForm.genre} onChange={handleEditChange} />
                  <input className="px-3 py-2 rounded text-xs border " type="text" name="year" value={editForm.year} onChange={handleEditChange} />
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold text-sm text-slate-100">{book.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">By {book.author}</p>
                  <div className="flex justify-between items-center mt-2 text-[11px] text-amber-300/80">
                    <span className="bg-slate-700/50 px-2 py-0.5 rounded">{book.genre}</span>
                    <span>{book.year}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-2 justify-end mt-1">
                {editingId === book.id ? (
                  <>
                    <button onClick={() => handleSaveUpdate(book.id)} className="bg-emerald-600 px-2 pyx-3 py-2 rounded text-xs border  font-semibold text-white cursor-pointer">Save</button>
                    <button onClick={() => setEditingId(null)} className="bg-slate-600 px-2 pyx-3 py-2 rounded text-xs border  font-semibold text-white cursor-pointer">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(book)} className="bg-amber-500 px-2 pyx-3 py-2 rounded text-xs border  font-semibold text-slate-900 cursor-pointer">Update</button>
                    <button onClick={() => handleDelete(book.id)} className="bg-rose-600 px-2 pyx-3 py-2 rounded text-xs border  font-semibold text-white cursor-pointer">Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookListDisplay;
