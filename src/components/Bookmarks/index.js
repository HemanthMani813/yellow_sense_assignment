// Bookmarks Component
import React, { useState, useEffect } from 'react';
import "./index.css";

function Bookmarks() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setBookmarkedJobs(storedBookmarks);
  }, []);

  const removeBookmark = (jobId) => {
    // Get the current list of bookmarked jobs
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];

    // Filter out the job with the given jobId
    const updatedBookmarks = bookmarks.filter(job => job.id !== jobId);

    // Update the bookmarks in localStorage
    localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));

    // Update the component state to re-render the UI
    setBookmarkedJobs(updatedBookmarks);

    alert('Job removed from bookmarks');
  };

  return (
    <div className='bookmark_container'>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarkedJobs.map(job => (
            <div key={job.id} className="job_card"> 
                <h3>Role: {job.title}</h3>
                <p>Company: {job.company_name}</p>
                <p>Location: {job.job_location_slug}</p>
                <p>Contact Number: {job.whatsapp_no}</p>
                <p>Min-Salary: {job.salary_min}</p>
                <button className='remove_btn' onClick={() => removeBookmark(job.id)}>Remove from Bookmark</button>
        </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
