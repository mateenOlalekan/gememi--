import {Routes, Route } from "react-router-dom";
import "./App.css";
import {useState} from "react";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ShowcaseProperties from './components/ShowcaseProperty'
import AdvertiseSection from './components/AdvertiseSection';
import ListingCTA from './components/ListingCTA';
import Footer from './components/Footer';
import ExploreLand from './pages/ExploreLand';
import SearchByState from './pages/SearchByState';
import FindAgent from './pages/FindAgent';
// import Activities from './pages/Activities';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
// import AddListing from './pages/AddListing';
import Property from './components/Propertypes';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SearchBar />
              <Property />
              <ShowcaseProperties activeTab={activeTab} setActiveTab={setActiveTab} />
              <AdvertiseSection />
              <ListingCTA />
            </>
          }
        />
        <Route path="/explore-land" element={<ExploreLand />} />
        <Route path="/search-by-state" element={<SearchByState />} />
        <Route path="/find-agent" element={<FindAgent />} />
        {/* <Route path="/activities" element={<Activities />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/add-listing" element={<AddListing />} /> */}
        <Route path="/property/:id" element={<Property/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
