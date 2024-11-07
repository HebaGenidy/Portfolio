import 'react';
import './MyWork.css';
import MyWorkData from './MyWorkData.jsx';

function MyWork() {
  return (
    <div id='Projects' className='cls-my-work'>
      <div className="my-work-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="my-work-container">
        {MyWorkData.map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} width={'80%'} alt={work.w_name} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
