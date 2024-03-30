import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Form, Row } from 'react-bootstrap';
import './question.css'
import { useDispatch, useSelector } from 'react-redux';
import { createOneQuestion } from '../../features/questions/questionSlice';

const AddQuestion = () => {

    const dispatch = useDispatch()
    const addOne = useSelector((state) => state.question.createQuestion);
    const isLoading = useSelector((state) => state.question.isLoading);
   
    console.log(addOne)


    const [numbers_count, setNumbers_count] = useState(""); //عدد الارقام في السوال
    const [answer, setAnswer] = useState(""); //الاجابه الصحيجه
    const [choices, setChoices] = useState(""); // ادخل الاختيارات
    const [numbers, setNumbers] = useState([]); // ادخل السوال
    
    //const [training_type_id, SetTraining_type_id] = useState(); // ادخل  نوع السوال
    

    //نوع السوال
    const [id, setId] = useState(); 
    console.log(id);


    //للقسم الرئيسي
    const [idMain, setIdmain] = useState(); 
    console.log(idMain);  



    //للقسم الفرعي
    const [idSub, setIdSub] = useState(); 
    console.log(idSub);  






    const handleChangeNumbersCount = (e) => {
        setNumbers_count(e.target.value);
    };
    
    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value);
    };
    
    const handleChangeChoices = (e) => {
      setChoices(e.target.value);
    };
     
    const handleChangeNumbers = (e) => {
      setNumbers(e.target.value);
    };

    const handleChangeTraingType = (e) => {
        setId(e.target.value);
    };

    const handleChangeMain = (e) => {
        setIdmain(e.target.value);
    };

    const handleChangeSub = (e) => {
        setIdSub(e.target.value);
    };


     
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        numbers_count: numbers_count,
        answer: answer,
        choices: choices,
        numbers: numbers,
        training_type_id: "عام",
        type_level_id:"جمع",
        level_category_id : "فرعي"
      };
      dispatch(createOneQuestion( formData ));
    };



    return   <div>

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


        <div className='box' style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px', marginBottom:'20px'}}>اضافه سؤال    </p>

            <Row>
               <Col sm={6}>
               <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} >  السؤال* </Form.Label>
                    <Form.Control value={numbers}    onChange={(e)=>handleChangeNumbers(e)}
                     type="text" placeholder="  أدخل السؤال  " className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' ,  marginBottom:'25px'}}
            />
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > نوع السؤال* </Form.Label>
                    <Form.Control
                    value={id}  
                      onChange={(e)=>handleChangeTraingType(e)}
                      
                     type="text" placeholder="  أدخل نوع السؤال  " className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' ,  marginBottom:'25px'}}
            />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  القسم الفرعي* </Form.Label>
                    <Form.Control value={idSub}  
                      onChange={(e)=>handleChangeSub(e)}
                    type="text" placeholder="أدخل القسم الفرعي " className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

              

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  الاختيارات * </Form.Label>
                    <Form.Control value={choices}    onChange={(e)=>handleChangeChoices(e)}
                    type="text" placeholder="أدخل  الاختيارات " className='custom-input'
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

              

               
               
               
            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}> القسم الرئيسي* </Form.Label>
                    <Form.Control   value={idMain}  
                      onChange={(e)=>handleChangeMain(e)}
                    type="text" placeholder="أدخل القسم الرئيسي  " className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  عدد الارقام في السوال* </Form.Label>

                    <Form.Control value={numbers_count}    onChange={(e)=>handleChangeNumbersCount(e)}
                     type="text" placeholder="أدخل عدد الارقام في السوال   " className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  الاجابه الصحيحه* </Form.Label>
                    <Form.Control  value={answer}    onChange={(e)=>handleChangeAnswer(e)}
                    type="text" placeholder="أدخل الاجابه الصحيحه      " className='custom-input'
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}/>
                </Form.Group>

            </Form>

           
                 </Col>
              <div style={{display:'flex', justifyContent:'end'}}>
                      <button onClick={handleSubmit}
                      style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px'}} >
                          اضافه
                        </button>
              </div>   
              

            </Row>
                        
            
         
      </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}


export default AddQuestion;