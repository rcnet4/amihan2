import ProtectedRoute from "components/ui/protectedRoute/ProtectedRoute";
import Blanklayout from "pageLayouts/BlankLayout";
import FullLayout from "pageLayouts/FullLayout";
import { Route, Routes } from "react-router-dom";
import LoginView from "views/login/loginView";
import PageNotFoundView from "views/pages/404/pageNotFoundView";
import "./app.scss";
import BlockView from "./views/block/BlockView";

const getFullLayoutRoutes = () => {
  return (
    <>
      <Route
        index
        element={
          <ProtectedRoute>
            <BlockView />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFoundView />} />
    </>
  );
};

const getBlankLayoutRoutes = () => {
  return (
    <>
      <Route index element={<LoginView />} />
      <Route path="*" element={<PageNotFoundView />} />
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<FullLayout />}>
          {getFullLayoutRoutes()}
        </Route>
        <Route path="auth" element={<Blanklayout />}>
          {getBlankLayoutRoutes()}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
