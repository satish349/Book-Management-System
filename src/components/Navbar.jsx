import AddDialog from "./AddDialog";

const Navbar = () => {
  const handleSearchChange = (e) => {
    const query = e.target.value;
    // Broadcast the search phrase across the application context
    window.dispatchEvent(new CustomEvent("bookSearch", { detail: query }));
  };

  return (
    <>
      <section>
        <dialog id="dialog" aria-labelledby="dialog-title" className="xl:w-1/4 w-full md:w-1/2 px-10 py-5 m-auto rounded-md border border-gray-200 shadow-xl backdrop:bg-black/40">
          <h1 className="text-xl font-semibold my-5">Add a Book</h1>
          <AddDialog />
        </dialog>
      </section>
      
      <section className="shadow-sm lg:px-40 md:px-20 sm:px-10 px-5 py-3 flex items-center justify-between gap-5 sm:gap-0 bg-white">
        <div className="flex items-center text-xl font-bold gap-1">
          <h1>
            <span className="text-blue-500">J</span>
            <span className="text-amber-500">O</span>
            <span className="text-green-900">Y</span>
          </h1>
          <h1>
            <span className="text-amber-900">9</span>
            <span>8</span>
          </h1>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                className="border border-gray-200 rounded-md px-5 py-2 text-sm xl:w-160 lg:w-130 md:w-100 sm:w-70 w-40 focus:outline focus:outline-amber-200"
                id="search"
                type="text"
                placeholder="Find your favourite book..." 
                onChange={handleSearchChange} // Triggers filter logic instantly
              />
            </div>
          </form>
        </div>
        <div className="text-md font-semibold flex gap-10 items-center">
          <button 
            onClick={() => document.getElementById("dialog")?.showModal()} 
            className="rounded-md bg-amber-500 hover:bg-amber-600 px-3 py-1.5 text-sm font-semibold text-white cursor-pointer transition"
          >
            Add Book
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
