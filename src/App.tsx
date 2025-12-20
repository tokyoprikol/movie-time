import Header from "./components/Header";
import { Routes, Route } from "react-router";

import { routes } from "./routes/page-routes";

function App() {
    return (
        <>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route path={route.path} element={route.element} />
                ))}
            </Routes>
        </>
    );
}

export default App;
