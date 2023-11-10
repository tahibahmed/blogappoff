import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Signupp from "./Components/Signup/Signupp";
import Login from "./Components/Login/Login";
import Blogss from "./Components/blog/Blogss";
import { useSelector } from "react-redux";


function App() {
  const { isLoggedIn } = useSelector((state) => state.Userget);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/blogs" element={<Blogss />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Signupp />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
