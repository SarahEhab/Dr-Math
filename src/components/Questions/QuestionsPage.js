import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import addIconColor from "../../images/addColor.svg"
import addIconWhite from "../../images/addWhite.svg"
import editIcon from "../../images/edit.svg"
import viewIcon from "../../images/view.svg"
import delIcon from "../../images/delete.svg"
import attentionIcon from "../../images/attention.svg"
import './question.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllquestions, removeOneQuestion } from '../../features/questions/questionSlice';

const QuestionsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const getDatQuestion = useSelector((state) => state.question.questionData);
  const isLoading = useSelector((state) => state.question.isLoading);
 
  console.log(getDatQuestion)
  console.log(getDatQuestion.data)

  // if(getDatQuestion && getDatQuestion.data){
  //   console.log(getDatQuestion.data.id)
  // }
 
  if(getDatQuestion.data){
    console.log(getDatQuestion.data.numbers_count)
}


  const deleteOneQuestion = useSelector((state) => state.question.deleteOne);
  const isLoadingDel = useSelector((state) => state.question.isLoading);
 
  console.log(getDatQuestion)


  useEffect(() => {
    dispatch(getAllquestions());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(removeOneQuestion(id));

  // }, [dispatch]);

  const token ="33|x1VvBnDjcHcGrqAjafaXKXSgv9cWtfSWGXxq7mXqc3db5601"
  const OnSubmit = async (e) => {
    e.preventDefault();
    await dispatch(removeOneQuestion(token))
    
  };


  const [smShow, setSmShow] = useState(false);
 
    return    <div>

    <Row style={{maxWidth:'100%'}}>
       <Col  sm={2} xs={2} md={3} xl={2}>
           <div>
          <Sidebar />
           </div>   
       </Col>
      
      

        <Col sm={10} xs={10} md={9} xl={10} >       
        <div className='nav-bar' style={{background:'#FFFFFF' }}>
                <div style={{display:'flex', justifyContent:'space-between', padding:'12px'}}>
                    <p> الاشئله</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div>

   <div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>     
        <div className='box' style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px', padding:'20px', margin:'20px 15px 20px 15px'}}>  


            <div style={{ display:'flex', justifyContent:'space-around', paddingTop:'30px'}}>


                        <div>
                            <p style={{ display:'flex', fontSize:'18px', marginBottom:'25px'}}>عرض الاسئله</p>
                        </div>

                        <div>
                        <Form.Control
                        type="text"
                        placeholder="البحث ياختيار نوع السؤال او المستوي او القسم الرئيسي او القسم الفرعي اوعدد الارقام "
                        style={{width:'300px', borderRadius:'50px', fontSize:'12px', color:'#181818'}}
                        />
                        </div>

            <div >

            <Link to='/add-excel-sheet'>
                        <button style={{padding:'8px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px'}}>
                            اضافه ملف اكسيل   <img src={addIconWhite} />
                        </button>

            </Link>
                        
                      
            </div>
                    

            </div>
            <div
                    style={{
                        marginLeft: "-55px",
                        borderBottom: "1.5px solid #EEEEEE ",
                        width: "100%",
                        marginTop:'15px',
                        marginBottom:'15px'
                    }}
                    ></div>




          {/* <Row  >
          
          <Col xl={1}> 
          <p>#</p>
          
          <div>1</div>
          <div>2</div>
          </Col>
          
          <Col xl={1}> 
          <p  style={{marginRight:'-45px'}}>    السؤال</p>
          <div>( 1 ,2 ,3 ) </div>
          </Col>
          <Col xl={1} > <p>نوع السؤال  </p> <div>  تدريب عام  </div> <div>  تدريب تفصيلي </div> </Col>
          <Col xl={1}>  <p>  القسم الرئيسي - المستوى </p> <div>  رياضيات  </div>  </Col>
          <Col xl={1}>   <p> القسم الفرعي </p>  <div>   تطبيقية   </div>   </Col>
          <Col xl={2}>   <p> عدد الارقام في السؤال </p>  <div>   مسائل رقمين   </div>  </Col>
          <Col xl={1}>   <p> الاجابه الصحيحة  </p> <div>  3  </div>  </Col>
          <Col xl={2}>  <p> الاختيارات  </p> <div> ( 1 ,2 ,3 ) </div>   </Col>
          <Col xl={2}> <p> الإجراءات  </p></Col>
        

          </Row> */}

          <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
          <div> <img src={attentionIcon} />  </div>
          <p style={{fontWeight:'bold'}}> انتبه </p>
          <p>  هل انت متاكد من حذف هذا السؤال من
          <span style={{color:'#FF8410'}}> الاسئلة  </span> </p>

          <button onClick={(e) => OnSubmit(e)}
          style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'100%'}}>
                حذف </button>


        </div>

        </Modal.Body>
      </Modal>


          <Table responsive="sm"    >
        <thead>
          <tr>
            <th>#</th>
            <th>  السؤال </th>
            <th> نوع السؤال  </th>
            <th>  القسم الرئيسي - المستوى </th>
            <th>  القسم الفرعي </th>
            <th> عدد الارقام في السؤال  </th>
            <th> الاجابه الصحيحة </th>
            <th> الاختيارات  </th>
            <th>  الإجراءات </th>
            
          </tr>
        </thead>

        {
          !isLoading?(
            getDatQuestion.data ? (
            <>
              {getDatQuestion.data && (getDatQuestion.data).map((item, index) => (
                <tbody>
          <tr>
            <td>{item.id}</td>
            <td> ( 1 ,2 ,3 )</td>
            <td> تدريب عام</td>
            <td> رياضيات</td>
            <td>تطبيقيه</td>
            <td> {item.numbers_count}  </td>
            <td>{item.answer}</td>
            <td>{item.choices}</td>
            <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-question'>
                <img src={editIcon} />
           </Link>
          
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            ايقاف  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>
          {/* <tr>
            <td>2</td>
            <td> ( 1 ,2 ,3 ) </td>
            <td> تدريب تفصيلي</td>
            <td>رياضيات</td>
            <td>تطبيقيه</td>
            <td>مسائل رقمين</td>
            <td>3</td>
            <td>( 1 ,2 ,3 )</td>
            <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-question'>
                <img src={editIcon} />
           </Link>
          
                <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            ايقاف  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>
          */}

          
        </tbody>
              ))}
            </>
          ) :   null
          ):(
            null
            )
        }



      
      </Table>  


        </div>
  </div>
       
        </Col>
     
    </Row>

    </div>
}


export default QuestionsPage;