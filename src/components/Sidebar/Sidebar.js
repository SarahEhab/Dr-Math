import React, { useState } from 'react';
import './Sidebar.css';
import drMath from "../../images/drMath.svg"
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
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
          <Link to='/Sub-official'  onClick={() => handleClick('subadmins')} style={{ backgroundColor: clickedItem === 'subadmins' ? '#FF7300' : '' , color: clickedItem === 'subadmins' ? '#FFFFFF' : '#CACACA'}}  >
          المسؤلين الفرعين
            {/* <a href="#" onClick={() => handleClick('subadmins')} style={{ backgroundColor: clickedItem === 'subadmins' ? '#FF7300' : '' , color: clickedItem === 'subadmins' ? '#FFFFFF' : '#CACACA'}}>المسؤلين الفرعين</a> */}
         </Link>
          </li>

          <li>
          <Link to='/personal-page'  onClick={() => handleClick('profile')} style={{ backgroundColor: clickedItem === 'profile' ? '#FF7300' : '' , color: clickedItem === 'profile' ? '#FFFFFF' : '#CACACA'}}  >
          الصفحة الشخصية
            {/* <a href="#" onClick={() => handleClick('profile')} style={{ backgroundColor: clickedItem === 'profile' ? '#FF7300' : '' , color: clickedItem === 'profile' ? '#FFFFFF' : '#CACACA'}}>الصفحة الشخصيه</a> */}
         </Link>
          </li>


          {/* <li>
          <Link to='/setting'  onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}  >
          الإعدادات
         
            <a href="/setting" onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}>الإعدادات</a>
            </Link>
          </li> */}


          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a href="#" onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}>الإعدادات</a></Accordion.Header>

        <Link to='/introduction-pages' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          
         الصفحات التعريفيه
          </Accordion.Body>
        </Link>
        <Link to='/slider-picture' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          صور السلايدر
          </Accordion.Body>
        </Link>
       
      </Accordion.Item>
    </Accordion>













          <li>
            <a href="#" onClick={() => handleClick('packages')} style={{ backgroundColor: clickedItem === 'packages' ? '#FF7300' : '' , color: clickedItem === 'packages' ? '#FFFFFF' : '#CACACA'}}>الباقات</a>
          </li>
          <li>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a href="#" onClick={() => handleClick('sections')} style={{ backgroundColor: clickedItem === 'sections' ? '#FF7300' : '' , color: clickedItem === 'sections' ? '#FFFFFF' : '#CACACA'}}>الأقسام</a></Accordion.Header>

        <Link to='/main-section' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          
          الاقسام الرئسية
          </Accordion.Body>
        </Link>
        <Link to='/sub-section' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          الاقسام الفرعية
          </Accordion.Body>
        </Link>
       
      </Accordion.Item>
      {/* <Accordion.Item eventKey="1">  #FF8410
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        sara
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>


            {/* <a href="#" onClick={() => handleClick('sections')} style={{ backgroundColor: clickedItem === 'sections' ? '#FF7300' : '' , color: clickedItem === 'sections' ? '#FFFFFF' : '#CACACA'}}>الأقسام</a> */}
          </li>


          <li>
          <Link to='/Questions'  onClick={() => handleClick('questions')} style={{ backgroundColor: clickedItem === 'questions' ? '#FF7300' : '' , color: clickedItem === 'questions' ? '#FFFFFF' : '#CACACA'}}>
          الاسئلة
            {/* <a href="/Questions" onClick={() => handleClick('questions')} style={{ backgroundColor: clickedItem === 'questions' ? '#FF7300' : '' , color: clickedItem === 'questions' ? '#FFFFFF' : '#CACACA'}}>الاسئلة</a> */}
            </Link>
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