import './App.css';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={<PhoneList />} />
        <Route path="/phone/:id" element={<PhoneDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
