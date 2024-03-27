import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Form, Row } from 'react-bootstrap';
import './question.css'


const EditQuestion = () => {
    return    <div>

    <Row style={{maxWidth:'100%'}}>

       <Col  sm={2} xs={2} md={3} xl={2}>
           <div>
          <Sidebar />
          
           </div> 
             
       </Col>
    

        <Col sm={10} xs={10} md={9} xl={10} >       
        <div style={{background:'#FFFFFF' }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p> الاشئله</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div>

<div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>


        <div style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px', marginBottom:'20px'}}>تعديل الاسئلة   </p>

            <Row>
               <Col sm={6}>
               <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > نوع السؤال* </Form.Label>
                    <Form.Control type="text" placeholder="  أدخل السؤال  " className='custom-input' value="تدريب عام"
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' ,  marginBottom:'25px'}}
            />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  القسم الفرعي* </Form.Label>
                    <Form.Control type="text" placeholder="أدخل القسم الرئيسي " className='custom-input' value="تطبيقيه"
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

              

               
               
               
            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}> القسم الرئيسي* </Form.Label>
                    <Form.Control type="text" placeholder="أدخل القسم الرئيسي  " className='custom-input' value="الرياضيات "
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}/>
                </Form.Group>

            </Form>

           
                 </Col>
              <div style={{display:'flex', justifyContent:'end'}}>
                      <button style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px'}} >
                           تعديل 
                        </button>
              </div>   
              

            </Row>
                        
            
         
      </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}


export default EditQuestion;