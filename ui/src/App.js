import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';

// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Signup'));

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Suspense is used to handle loading state while the component is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
