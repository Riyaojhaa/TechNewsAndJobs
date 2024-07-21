import React, { useEffect , useState} from 'react'
import axios from 'axios'
import Jobscards from './Jobscards'


export default function ApiCall2() {

  const [getJobNews , setgetJobNews] = useState([])


  useEffect(() => {
    const getArticles =  async () => {
      try {
        const res = await axios.get("https://sheets.googleapis.com/v4/spreadsheets/1owGcfKZRHZq8wR7Iw6PVh6-ueR0weIVQMjxWW_0M6a8/values/Sheet1!A1:N10?key=AIzaSyDErRezqW2klWRYKwQkzuOIMGJ5AeD5GSY");
        console.log(res.data.values)
        setgetJobNews(res.data.values)
      } catch (error) {
        console.error('error in fetching the technologynews:', error)
      }
    };
    getArticles();
  },[]);

  return (
    <div className='row'>
    {getJobNews.slice(1).map((job, index) => (
      <Jobscards
        key={index}
        linkedInJobLink={job[1]}
        companyName={job[2]}
        jobTitle={job[3]}
        location={job[4]}
        // jobDescription={job[5]}
        // applyLink={job[6]}
        // salaryMin={job[12]}
        // salaryMax={job[13]}
      />
    ))}
  </div>

  )
}



