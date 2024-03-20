import React from 'react';
import { Row,Col , Container, Form} from 'react-bootstrap'
import imgForm from "../../images/imgform.png";
const Login = () => {
    return <>

   <div>




     <Row style={{maxWidth:'100%'}}>
     <Col  sm={12} xs={12} md={12} xl={6}>
     <div>
     <img
              src={imgForm}
              alt=""
              style={{ maxWidth: "705px", height: "1024px" }}
            />
     </div>
            
           
          </Col>

       
       
        <Col sm={12} xs={12} md={12} xl={6}>       
      
<p style={{color:'#111' , fontSize:'36px', fontWeight:'700'}}> تسجيل الدخول المشرف</p>
<p style={{color:'rgba(17, 17, 17, 0.40)', fontSize:'16px'}}> مرحبا بك مرة اخري,قم بتسجيل الدخول الي لوحة التحكم الخاصة بك </p>
<Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{display:'flex'}}>بريدك الإلكتروني</Form.Label>
        <Form.Control type="email" placeholder="أدخل بريدك الالكتروني الخاص بك" 
            style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px', width:'507px'}}
/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{display:'flex'}}>كلمه المرور </Form.Label>
        <Form.Control type="password" placeholder="أدخل كلمة المرور" 
        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px', width:'507px'}}/>
    </Form.Group>

    <Form.Group className=" d-flex" >
        <Form.Check type="radio"  />
        <p style={{color:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' , marginRight:'10px'}}> أدمن</p>
    </Form.Group>
    <Form.Group className="mb-3 d-flex" >
        <Form.Check type="radio"  />
        <p style={{color:'#BFBFBF', marginRight:'10px'}}> مسؤال فرعي</p>
    </Form.Group>

    <button style={{  borderRadius:'16px', color:'#FFFFFF', padding:'18px',
     fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'507px'}}>
     تسجيل الدخول</button>

    <div><p style={{color:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)'}}> هل نسيت كلمه المرور ؟ </p></div>
</Form>

       </Col>
       
        
     </Row>

   
     </div>


    </>;
}



export default Login;