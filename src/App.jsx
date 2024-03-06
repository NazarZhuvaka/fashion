import { Route, Routes } from "react-router-dom";
// import { NotFound } from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Men } from "./pages/Men/Men";
import { Women } from "./pages/Women/Women";

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="men" element={<Men />}/>
          <Route path="women" element={<Women />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
