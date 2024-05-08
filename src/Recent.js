import React, { useState } from 'react';
import './App.scss';
import { RiArrowDownWideLine } from 'react-icons/ri';

const RecentActivity = () => {
  // Sample recent activities based on the email section
  const [showRecentActivity, setShowRecentActivity] = useState(false);

  const recentActivities = [
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    },
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    },
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    },
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    },
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    },
    {
      sender: 'Paras Kumar',
      subject: 'Deadline extended for this....',
      time: '2:30PM',
    }
  ];

  return (
    <div className="recentSection" style={{width:"24%"}}>
      <div className="recent-header" >
        <h5 style={{fontSize:"16px"}}>Recent activities</h5>
        <button 
          className="toggle-button" 
          onClick={() => setShowRecentActivity(!showRecentActivity)} 
          style={{
            height: "19px", 
            margin: "28px 49px auto auto", 
            borderRadius:"10%",
            border: showRecentActivity ? '1px solid rgba(49, 88, 229, 1)' : '1px solid black'
          }} 
        >
          <RiArrowDownWideLine style={{ color: showRecentActivity ? 'rgba(49, 88, 229, 1)' : 'inherit' , marginBottom:"-3px"}} />
        </button>
      </div><br/>

      {showRecentActivity && recentActivities.map((activity, index) => (
        <div className="activity-details" key={index}>
          <div className="activity-info">
            <div className="sender-info">
              <span className="sender-name" style={{ marginTop: "25px", fontSize:"12px", color:"rgba(0, 0, 0, 1)" }}>{activity.sender}</span>
              <span className="activity-time" style={{ color: "rgba(0, 0, 0, 1)",opacity:"30%", fontSize: "10px", marginLeft: "150px", }}>1 hrs ago</span>
            </div>
            <div className="subject-info" style={{ color: "rgb(126 117 117)" }}>
              <span className="subject-prefix" style={{ marginBottom: "15px", fontSize:"12px"}}>Re:</span>
              <span className="subject" style={{fontSize:"12px",color: "rgba(0, 0, 0, 1)",opacity:"60%"}}>{activity.subject}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;
