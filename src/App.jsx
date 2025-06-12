import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Admin from "./components/pages/admin/Admin";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPages />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
