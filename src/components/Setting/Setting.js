import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';

const Setting = () => {
    return    <div>

    <Row style={{maxWidth:'100%'}}>
       <Col  sm={12} xs={12} md={12} xl={6}>
           <div>
          <Sidebar />
           </div>   
       </Col>
      
       <Col sm={12} xs={12} md={12} xl={6} style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'-200px', flexDirection:'column'}}>       
     
        
       <button style={{  borderRadius:'16px', color:'#FFFFFF', padding:'18px',
               fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'507px'}}>
              pt'''''''''''</button>

      </Col>
       
    </Row>

    </div>
}



export default Setting;