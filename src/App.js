import Navbar from "./components/Navbar";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-white">
      <Navbar menuItems={menuItems} />
    </div>
  );
}

export default App;
