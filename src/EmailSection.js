import React, { useState } from 'react';
import './App.scss';
import airasiaLogo from './AirAsia_New_Logo.svg.png';
import anotherImage from './account_logo.png';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const EmailSection = () => {
    const [expandedEmailIndex, setExpandedEmailIndex] = useState(null);
    const [hoverBackArrow, setHoverBackArrow] = useState(false);
    const [hoverLeftArrow, setHoverLeftArrow] = useState(false);
    const [hoverRightArrow, setHoverRightArrow] = useState(false);
    const [hoverMoreIcon, setHoverMoreIcon] = useState({});
    const [isHovered, setIsHovered] = useState({});
    const [isMoreHovered, setIsMoreHovered] = useState({});

    const handleMouseEnter = (index) => {
        setHoverMoreIcon(prev => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setHoverMoreIcon(prev => ({ ...prev, [index]: false }));
    };

    const handleArrowMouseEnter = (index) => {
        setIsHovered(prev => ({ ...prev, [index]: true }));
    };

    const handleArrowMouseLeave = (index) => {
        setIsHovered(prev => ({ ...prev, [index]: false }));
    };

    const handleMoreMouseEnter = (index) => {
        setIsMoreHovered(prev => ({ ...prev, [index]: true }));
    };

    const handleMoreMouseLeave = (index) => {
        setIsMoreHovered(prev => ({ ...prev, [index]: false }));
    };

    const messages = [
        {
            subject: 'SR-[1234567] Unsubscribed status of web scraper for Air India express Star air & Alliance air',
            sender: 'AirAsia',
            senderEmail: '<airasia@xyz.in>',
            recipient: 'Support',
            body: 'I have a question about my flight booking. Can you please assist me?',
            time: '4:48 PM',
            image: airasiaLogo
        },
        {
            subject: '',
            sender: 'Support.Finkraft',
            senderEmail: '<support@kgrp.in>',
            recipient: 'AirAsia',
            body: 'I need assistance with booking tickets. Could you please help me with that?',
            time: '5:30 PM',
            image: anotherImage
        },
        {
            subject: '',
            sender: 'AirAsia',
            senderEmail: '<airasia@xyz.in>',
            recipient: 'Support',
            body: 'Star air & Alliance air. Development of web scraper for Air India express.  Development of web scraper . ',
            time: '6:15 PM',
            image: airasiaLogo
        },
    ];

    const handleEmailClick = (index) => {
        setExpandedEmailIndex(index === expandedEmailIndex ? null : index);
    };

    return (
        <div style={{ borderRight: "1px solid rgba(220, 231, 253, 1)", marginRight: "3px" }}>
            <div className="back-arrow-container" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto", alignItems: "center", marginTop: "28px", marginBottom: "-1px" }}>
                <IoMdArrowBack
                    className="back-arrow"
                    style={{ justifySelf: "start", color: hoverBackArrow ? "rgba(49, 88, 229, 1)" : "rgba(153, 153, 153, 1)", fontSize: "1.5em", cursor: "pointer" }}
                    onMouseEnter={() => setHoverBackArrow(true)}
                    onMouseLeave={() => setHoverBackArrow(false)}
                />
                <span className='page-no'>5 of 6</span>
                <RiArrowLeftSLine
                    style={{ fontSize: "20px", color: hoverLeftArrow ? "blue" : "rgba(153, 153, 153, 1)", marginRight: "16px" }}
                    onMouseEnter={() => setHoverLeftArrow(true)}
                    onMouseLeave={() => setHoverLeftArrow(false)}
                />
                <RiArrowRightSLine
                    style={{ fontSize: "20px", color: hoverRightArrow ? "blue" : "rgba(153, 153, 153, 1)" }}
                    onMouseEnter={() => setHoverRightArrow(true)}
                    onMouseLeave={() => setHoverRightArrow(false)}
                />
            </div>
            <span style={{ width: "100%", borderBottom: "1px solid black", margin: "20px 0" }}></span>
            <div className="email-section">
                {messages.map((message, index) => (
                    <div key={index} onClick={() => handleEmailClick(index)}>
                        <div className="email-container">
                            <div className="subject-container">
                                <div className="email-subject" style={{ padding: "36px", marginTop: "-61px" }}>{message.subject}</div>
                                {index === 0 && <IoMdMore
                                    style={{ marginRight: "15px", fontSize: "28px", marginBottom: "56px", color: hoverMoreIcon[index] && expandedEmailIndex === index ? 'blue' : 'rgba(153, 153, 153, 1)' }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                />}
                            </div>
                            <div className="sender-info">
                                <div className="sender-image">
                                    <img src={message.image} alt="Sender" />
                                </div>
                                <div className="sender-details">
                                    <div className="name-and-email">
                                        <span className="sender-name">{message.sender}</span>
                                        <span className="sender-email">{message.senderEmail}</span>
                                    </div>
                                    <span className="recipient">to {message.recipient} <FaAngleDown style={{ marginBottom: "-2px", width: "10px", height: "12px", marginLeft: "2px" }} /></span>
                                    <div className="email-timing" style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", alignItems: "center", marginLeft: "auto", marginRight: "19px" }}>
                                        <div className="email-day" style={{ justifySelf: "end", marginRight: "3px" }}>Fri</div>
                                        <div className="email-date" style={{ marginRight: "3px" }}>Mar 27</div>
                                        <div className="email-time" style={{ marginRight: "5px" }}>11:40 AM (1 hr ago)</div>
                                        <BsArrow90DegLeft
                                            style={{
                                                fontSize: "15px",
                                                marginBottom: "-4px",
                                                color: expandedEmailIndex === index && isHovered[index] ? 'blue' : 'rgba(153, 153, 153, 1)'
                                            }}
                                            onMouseEnter={() => handleArrowMouseEnter(index)}
                                            onMouseLeave={() => handleArrowMouseLeave(index)}
                                        />
                                        <IoMdMore
                                            style={{
                                                fontSize: "21px",
                                                marginBottom: "-6px",
                                                color: expandedEmailIndex === index && isMoreHovered[index] ? 'blue' : 'rgba(153, 153, 153, 1)'
                                            }}
                                            onMouseEnter={() => handleMoreMouseEnter(index)}
                                            onMouseLeave={() => handleMoreMouseLeave(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {expandedEmailIndex === index && (
                            <div className="email-body" style={{ marginLeft: "96px", fontSize: "14px" }}>
                                <p>{message.body}</p>
                                {index !== 0 && (
                                    <>
                                        <p>Thanks,</p>
                                        <button className="reply-button" style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', width: "75px", backgroundColor: "rgba(49, 88, 229, 1)", borderRadius: "8px", border: "none", padding: "6px", fontSize: "12px", marginTop: "26px" }}>
                                            <span className="reply-text" style={{ marginLeft: "8px", fontSize: "0.85em", color: "rgba(255, 255, 255, 1)" }}>Reply</span> <BsArrow90DegLeft style={{ marginTop: "2px", color: "rgba(255, 255, 255, 1)", marginRight: "7px" }} />
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        <hr className='horizontal-line'></hr>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmailSection;
