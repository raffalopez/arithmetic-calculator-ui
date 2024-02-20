import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import BalancePage from "./pages/Balance";
import NewOperation from "./pages/New-Operation";
import Header from "./components/Header";
import SignUpPage from "./pages/Sign-up";
import PrivateRouter from "./routes/PrivateRouter.routes";
import { useDispatch } from "react-redux";
import { logOutUser } from "./features/auth/auth.Slices";
import { removeUserOperations } from "./features/record/records.Slices";

function App() {
  const dispatch = useDispatch();
  const resetData = () => {
    dispatch(logOutUser());
    dispatch(removeUserOperations());
  };
  return (
    <div>
      <BrowserRouter>
        <Header onSignOut={resetData} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/new-operation"
            element={
              <PrivateRouter>
                <NewOperation />
              </PrivateRouter>
            }
          />
          <Route
            path="/balance"
            element={
              <PrivateRouter>
                <BalancePage />
              </PrivateRouter>
            }
          />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
