import React, { useState } from "react";

import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import BlogIndex from "./BlogIndex.jsx";

const App = () => {
  const [view, setView] = useState('home')
   return (
     <>
     <Nav setView={setView}/>
     {view === 'home' &&
        <Home/>
     }
     {view === 'blog-index' &&
      <BlogIndex setView={setView}/>
     }
    </>
    )
};

export default App;