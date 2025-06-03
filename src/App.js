import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Navigation from './components/Navigation';
import WeddingCarousel from './components/WeddingCarousel';
import Invitacion from './pages/Invitacion';
import Ceremonia from './pages/Ceremonia';
import Celebracion from './pages/Celebracion';
import Fotos from './pages/Fotos';
import Alojamiento from './pages/Alojamiento';
import SubirFoto from './pages/SubirFoto';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div className="hero-background">
                <main>
                  <WeddingCarousel />
                </main>
              </div>
            }
          />
          <Route path="/invitacion" element={<Invitacion />} />
          <Route path="/ceremonia" element={<Ceremonia />} />
          <Route path="/celebracion" element={<Celebracion />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/alojamiento" element={<Alojamiento />} />
          <Route path="/subir-foto" element={<SubirFoto />} />
        </Routes>
        {/*
        <div className="content-background">
           Aquí irá el contenido adicional 
        </div>*/}
        <footer className="wedding-footer">
          <p>Verónica & Abel - Nuestra boda 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
