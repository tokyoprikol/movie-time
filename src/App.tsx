import Header from "./components/Header";
import { Routes, Route } from "react-router";

import { routes } from "./routes/page-routes";
import AuthModal from "./components/AuthModal";

function App() {
    return (
        <>
            <Header />
            <AuthModal />
            <Routes>
                {routes.map((route) => (
                    <Route path={route.path} element={route.element} />
                ))}
            </Routes>
        </>
    );
}

export default App;
