import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

// Static homepage components
import Hero from "./components/hero";
import Categories from "./components/catagories";
import WorldRecord from "./components/worldrecord";

// Dynamic pages
import WrMain from "./Extended/wrMain";
import DetailingProducts from "./Extended/detailingProducts";
import PodcastPage from "./Extended/podcasts";
import WallpaperTool from "./Extended/wallpaper"; // Wallpaper Tool
import VideoDownloader from "./Extended/downloader"; // Video Downloader Tool
import AboutusPage from "./Extended/About";
import ContactPage from "./Extended/contact";

// Import Blog Section Component
import BlogsSection from "./Extended/blogs"; // Add this line

const App = () => {
  return (
    <Router>
      {/* Static Navbar */}
      <Header />
      <Nav />

      {/* Dynamic content area */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <WorldRecord />
            </>
          }
        />
        {/* Dynamic routes */}
        <Route path="/worldRecordMain" element={<WrMain />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/detailing" element={<DetailingProducts />} />
        <Route path="/WallpaperTool" element={<WallpaperTool />} /> {/* Wallpaper Tool Route */}
        <Route path="/videoDownloader" element={<VideoDownloader />} /> {/* Video Downloader Route */}
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Add the Blogs Section Route */}
        <Route path="/blogsSection" element={<BlogsSection />} /> {/* Blogs Section Route */}
      </Routes>

      {/* Static Footer */}
      <Footer />
    </Router>
  );
};

export default App;
