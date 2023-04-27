import HomeCrud from "./Components/HomeCrud";
import Users from "./Components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeCrud />
        <Routes>
          <Route path="/createusers" element={<CreateUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
