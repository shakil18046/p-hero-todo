import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Calender from "./components/Calender/Calender";
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import Home from './components/Home/Home';
import Todo from "./components/Todo/Todo";
import Footer from "./shared/Footer";
import Nav from "./shared/Nav";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Nav></Nav>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completedtask" element={<CompletedTasks />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calender" element={<Calender />} />
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
