import Header from "./components/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
