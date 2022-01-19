import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventPage from "./pages/Event";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/event">
          <Route path=":eventId" element={ <EventPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
