import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/todoPage";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import RequireAuth from "./pages/requireAuth/RequireAuth";
import Layout from "./pages/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/todo" element={<TodoListPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
