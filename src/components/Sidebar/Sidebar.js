import React, { useState } from 'react';
import './Sidebar.css';
import drMath from "../../images/drMath.svg"
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (itemName) => {
    setClickedItem(itemName);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={drMath} alt="Your Logo" />
      </div>
      <div className="sidebar-menu">
          <ul>
          <li>
            <a href="#" onClick={() => handleClick('home')} style={{ backgroundColor: clickedItem === 'home' ? '#FF7300' : '' , color: clickedItem === 'home' ? '#FFFFFF' : '#CACACA' }}>الصفحة الرئسية</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('subadmins')} style={{ backgroundColor: clickedItem === 'subadmins' ? '#FF7300' : '' , color: clickedItem === 'subadmins' ? '#FFFFFF' : '#CACACA'}}>المسؤلين الفرعين</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('profile')} style={{ backgroundColor: clickedItem === 'profile' ? '#FF7300' : '' , color: clickedItem === 'profile' ? '#FFFFFF' : '#CACACA'}}>الصفحة الشخصيه</a>
          </li>


          <li>
            <a href="/setting" onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}>الإعدادات</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('packages')} style={{ backgroundColor: clickedItem === 'packages' ? '#FF7300' : '' , color: clickedItem === 'packages' ? '#FFFFFF' : '#CACACA'}}>الباقات</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('sections')} style={{ backgroundColor: clickedItem === 'sections' ? '#FF7300' : '' , color: clickedItem === 'sections' ? '#FFFFFF' : '#CACACA'}}>الأقسام</a>
          </li>


          <li>
            <a href="/Questions" onClick={() => handleClick('questions')} style={{ backgroundColor: clickedItem === 'questions' ? '#FF7300' : '' , color: clickedItem === 'questions' ? '#FFFFFF' : '#CACACA'}}>الاسئلة</a>
          </li>

          <li>
            <a href="#" onClick={() => handleClick('students')} style={{ backgroundColor: clickedItem === 'students' ? '#FF7300' : '' , color: clickedItem === 'students' ? '#FFFFFF' : '#CACACA'}}>الطلاب المسجلين</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('trainers')} style={{ backgroundColor: clickedItem === 'trainers' ? '#FF7300' : '' , color: clickedItem === 'trainers' ? '#FFFFFF' : '#CACACA'}}>المدربين المسجلين</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('tournaments')} style={{ backgroundColor: clickedItem === 'tournaments' ? '#FF7300' : '' , color: clickedItem === 'tournaments' ? '#FFFFFF' : '#CACACA'}}>البطولات</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('notifications')} style={{ backgroundColor: clickedItem === 'notifications' ? '#FF7300' : '', color: clickedItem === 'notifications' ? '#FFFFFF' : '#CACACA'}}>الاشعارات</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('support')} style={{ backgroundColor: clickedItem === 'support' ? '#FF7300' : '' , color: clickedItem === 'support' ? '#FFFFFF' : '#CACACA'}}>الدعم الفني</a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('contact')} style={{ backgroundColor: clickedItem === 'contact' ? '#FF7300' : '', color: clickedItem === 'contact' ? '#FFFFFF' : '#CACACA' }}>تواصل معنا</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;