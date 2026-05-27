import { useState } from "react";
import { booksListFile } from "./booksData";

const AddDialog = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!data.title.trim()) return;

    // Create a new unique book object
    const newBook = {
      id: crypto.randomUUID(), // Unique id for precise updating and deletion
      title: data.title.trim(),
      author: data.author.trim(),
      genre: data.genre.trim(),
      year: data.year.trim(),
    };

    // Store directly into the separate file's array
    booksListFile.push(newBook);

    // Reset form inputs
    setData({ title: "", author: "", genre: "", year: "" });

    // Instantly notify BookListDisplay to re-render
    window.dispatchEvent(new Event("booksUpdated"));

    // Automatically close the native HTML dialog
    const dialogElement = document.getElementById("dialog");
    if (dialogElement) dialogElement.close();
  };

  return (
    <div>
      <form onSubmit={formHandler} className="flex flex-col gap-5">
        <input
          className="border border-gray-300 w-full py-2 px-5 rounded-md text-sm outline-none bg-slate-500/20"
          placeholder="Enter Book Name..."
          type="text"
          value={data.title}
          onChange={handleChange}
          name="title"
          required
        />
        <input
          className="border border-gray-300 w-full py-2 px-5 rounded-md text-sm outline-none bg-slate-500/20"
          placeholder="Enter Author Name..."
          type="text"
          value={data.author}
          onChange={handleChange}
          name="author"
          required
        />
        <input
          className="border border-gray-300 w-full py-2 px-5 rounded-md text-sm outline-none bg-slate-500/20"
          placeholder="Enter genre..."
          type="text"
          value={data.genre}
          onChange={handleChange}
          name="genre"
          required
        />
        <input
          className="border border-gray-300 w-full py-2 px-5 rounded-md text-sm outline-none bg-slate-500/20"
          placeholder="Enter Publication Year..."
          type="text"
          value={data.year}
          onChange={handleChange}
          name="year"
          required
        />
        
        <button
          type="submit"
          className="bg-amber-500 text-sm font-semibold py-2 rounded-md transition-all duration-700 cursor-pointer active:bg-amber-200 hover:scale-95 text-white"
        >
          Add Book
        </button>
        
        <button
          type="button"
          onClick={() => document.getElementById("dialog")?.close()}
          className="bg-gray-400 text-sm font-semibold py-2 rounded-md transition-all duration-700 cursor-pointer active:bg-gray-200 hover:scale-95 text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddDialog;
