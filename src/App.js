import Cars from "./Components/Cars/Cars";
import Form from "./Components/Form/Form";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/show-cars" element={<Cars />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
