
import React, { useEffect, useState } from 'react';
import "./index.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const bookmarkJob = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    const isAlreadyBookmarked = bookmarks.some(bookmarkedJob => bookmarkedJob.id === job.id);

    if (!isAlreadyBookmarked) {
      bookmarks.push(job);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
      alert('Job bookmarked successfully!');
    } else {
      alert('This job is already bookmarked!');
    }
  };

   

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        const data = await response.json();
        console.log(data);
        setJobs(prevJobs => [...prevJobs, ...data.results]);
        //console.log(jobs);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs');
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [page]);

  

  const loadMoreJobs = () => setPage(prevPage => prevPage + 1);

  return (
    <div className='cont'>
        <div className="job_cards_container">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {jobs.map(job => (
            
            <div key={job.id} className="job_card" > 

                <h3>Role: {job.title}</h3>
                <p>Company: {job.company_name}</p>
                <p>Location: {job.job_location_slug}</p>
                <p>Contact Number: {job.whatsapp_no}</p>
                <p>Min-Salary: {job.salary_min}</p>
                <button className='bookmark_btn' onClick={() => bookmarkJob(job)}>Add to Bookmark</button>
            </div>
            
            
        ))}
        
        </div>
        {!isLoading && <button onClick={loadMoreJobs} className='load_more_btn'>Load More Jobs</button>}
        {/* <div className='loadMore_btn_cont'>
            
            {!isLoading && <button onClick={loadMoreJobs} className='load_more_btn'>Load More Jobs2</button>}
        </div> */}
        
        
    </div>
    
  );
}

export default Jobs;
