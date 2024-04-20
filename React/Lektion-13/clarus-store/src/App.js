// import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import Approuter from "./router/Approuter";


function App() {
  return (
    <div>
    <AuthProvider>
    <Approuter/>
    </AuthProvider>

    
    {/* router dosyasina tasindi */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter> */}
      
    </div>
    // <div className="min-h-screen bg-slate-700 text-white text-4xl flex justify-center gap-2 items-center">
    //   <span className="animate-bounce">🏀</span>
    //   <h1 className="animate-pulse">
    //     Welcome to Session 1 of the Clarus Store Project FS16!
    //   </h1>
    //   <span className="animate-bounce">🏀</span>
    // </div>
  );
}

export default App;