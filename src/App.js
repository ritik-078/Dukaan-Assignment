import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="grid grid-cols-12">
      <div className=" bg-sidebar col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Main />
      </div>
    </div>
  );
}

export default App;
