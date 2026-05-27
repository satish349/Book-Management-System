import BookListDisplay from "./BookListDisplay";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">Book Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">You can manage your books here. like adding, editing, or deleting them.</p>
      </div>
      
      {/* Separate visual display component tracking database objects array */}
      <BookListDisplay />
    </div>
  );
};

export default Home;
