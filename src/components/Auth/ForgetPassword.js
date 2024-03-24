import React from 'react';
import { Row,Col , Container, Form} from 'react-bootstrap'
import imgForm from "../../images/imgform.png";
import './Auth.css'
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
    return  <div>

    <Row style={{maxWidth:'100%'}}>
       <Col  sm={12} xs={12} md={12} xl={6}>
           <div>
           <img  src={imgForm} alt="" style={{ width:'100%', height: "1024px" }} />
           </div>   
       </Col>
      
       <Col sm={12} xs={12} md={12} xl={6} style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'-200px', flexDirection:'column'}}>       
     
           <p style={{color:'#111' , fontSize:'36px', fontWeight:'700'}}> نسيت كلمة المرور</p>
           <p style={{color:'rgba(17, 17, 17, 0.40)', fontSize:'16px', marginBottom:'25px'}}> أدخل بريدك الالكتروني لاعادة تعين كلمة المرور الخاصة بك</p>
           <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label style={{display:'flex'}} >بريدك الإلكتروني</Form.Label>
                   <Form.Control type="email" placeholder="أدخل بريدك الالكتروني الخاص بك" className='custom-input'
                       style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px', width:'507px', marginBottom:'30px'}}
           />
               </Form.Group>
             
        <Link to='/confirm-email' style={{textDecoration:'none'}}>
               <button style={{  borderRadius:'16px', color:'#FFFFFF', padding:'18px',
               fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'507px'}}>
              ارسال</button>
        </Link>
              
           </Form>

      </Col>
       
    </Row>

    </div>;
}



export default ForgetPassword;