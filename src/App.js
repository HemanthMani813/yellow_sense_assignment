// App Component
import React, { useState } from 'react';
import Bookmarks from './components/Bookmarks';
import Jobs from './components/Jobs';
import "./App.css"

function App() {
  const [activeTab, setActiveTab] = useState('Jobs'); 

  return (
    <div>
      <nav className='nav_head'>
        <a href='https://yellowsense.in/' target="_blank" rel="noreferrer">
          <div className='profile_cont'>
            <img src='https://yellowsense.in/images/logo.webp' alt='logo' className='logo_img' />
            <h3>Yellow Sense Job Portal</h3>
          </div>
        </a>
        
        <a href='https://hemanthmaniportfolio.netlify.app' target="_blank" rel="noreferrer">
          <div  className='profile_cont'>
            <h4>Hemanth Mani</h4>
            <img className='profile_logo' src='https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1726070950~exp=1726074550~hmac=c2707cbfa118893aa25e23b53a8c6f3c50573e72b09428ea4aebfc55f7d54c14&w=740'  alt='profile'/>
          </div>
        </a>
        
        
      </nav>
      <div className='content'>
        {activeTab === 'Jobs' ? <Jobs /> : <Bookmarks />}
      </div>
      
      <nav className="bottom-nav navbar">
        <button className={(activeTab === 'Jobs') ? "selected":"unselected"} onClick={() => setActiveTab('Jobs')}>Jobs</button>
        <button className={(activeTab === 'Bookmarks') ? "selected":"unselected"} onClick={() => setActiveTab('Bookmarks')}>Bookmarks</button>
      </nav>
    </div>
  );
}
export default App