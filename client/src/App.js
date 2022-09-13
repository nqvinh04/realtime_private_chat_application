import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "./pages/Register";
import "./style.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({children}) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={
                    // <ProtectedRoute>
                    //     <Home/>
                    // </ProtectedRoute>
                    <Home/>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
