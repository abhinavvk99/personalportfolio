import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import img01 from './img/IMG_20240109_194747_770.jpg'
import htmllogo from './img/html-5-svgrepo-com.svg'
import css from './img/css-3-svgrepo-com.svg'
import javascript from './img/javascript-svgrepo-com.svg'
import boot from './img/bootstrap-4-logo-svgrepo-com.svg'
import react from './img/reactjs-svgrepo-com.svg'
import mongo from './img/mongodb-svgrepo-com.svg'
import node from './img/nodejs-1-logo-svgrepo-com.svg'
import express from './img/icons8-express-js.svg'
import github from './img/github-142-svgrepo-com.svg'
import todo from './img/todolist.png'
import clac from './img/calc.png'
import chesse from './img/chesse.png'
import movieapp from './img/movieapp.png'
import loginpage from './img/loginpage.png'
import planty from './img/planty.png'
import email from './img/email-postcard-svgrepo-com.svg'
import linkedin from './img/linkedin-svgrepo-com.svg'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContainerExample() {

  const [data,setData]=useState({
    name:'',
    email:'',
    message:''
  })
  const handlechange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    if (data.name ==='' || data.email==='' || data.message ==='') {
       toast.error('No Message!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          } else {
          toast.success('Got Your MESSAGE', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });     
            setData({
              name:'',
              email:'',
              message:''
            })
    }
  }

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <Container fluid>
      <section className='back' id='action1'>
      <Row>
        <Col xs={12} md={6} lg={6}>
            <div className='main'>
              <h1>WELCOME</h1>
                <h2 className='glow'>I AM ABHINAV.VK</h2>
                <marquee behavior="" direction="right"><h3>FULL STACK DEVELOPER</h3></marquee>
            </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
        <div className='pro'>
        <img src={img01} alt="profile" style={{width:'20rem'}} className='rounded-5' />
        </div>
        </Col>
      </Row>
      </section>
      <section className='back2' id='action2'>
        <Row>
            <Col xs={12} md={12} lg={6}>
            <div className='mern'>
                <p>"Hi, I’m a MERN full stack developer with a passion for creating web applications that are user-friendly, responsive, and secure. I have learned the fundamentals 
                    of web development through various online courses and projects."</p>
            </div>
            </Col>
        </Row>
      </section>
      <section className='back3' id='action3'>
      <div>
                <h1 style={{textAlign:'center',color:'white',padding:'1rem'}}>skills</h1>
            </div>
        <div className='grid'>
        <div className='box1'>
            <img src={htmllogo} alt="html" />
            <h4>html</h4>
          </div>
          <div className='box1'>
            <img src={css} alt="css" />
            <h4>css 3</h4>
          </div>
          <div className='box1'>
            <img src={javascript} alt="javascript" />
            <h4>javascript</h4>
          </div>
          <div className='box1'>
            <img src={boot} alt="bootstrap v5" />
            <h4>bootstrap 5</h4>
          </div>
          <div className='box1'>
            <img src={react} alt="react" />
            <h4>react.js</h4>
          </div>
          <div className='box1'>
            <img src={mongo} alt="mongodb" />
            <h4>mongodb</h4>
          </div>
          <div className='box1'>
            <img src={node} alt="nodejs" />
            <h4>node.js</h4>
          </div>
          <div className='box1'>
            <img src={express} alt="express js" />
            <h4>express.js</h4>
          </div>
          <div className='box1'>
            <img src={github} alt="github" />
            <h4>github</h4>
          </div>
        </div>
      </section>
      <section className='back4' id='action4'>
        <div>
          <h1 style={{textAlign:'center',color:'white',padding:'1rem'}} >projects</h1>
        </div>
        <div className='grid'>
        <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={todo} />
                  </div>
                  <div class = 'content'>
                    <h3>TO-DO-LIST</h3>
                    <p>To do list created with html,css,and javascript allows you to manage tasks effciently.
                      with a clean and intuitive interface designed using html and css,you can easily add,remove,and mark
                      tasks as completed using javascript.it provides a seamless user experience for organizing your daily tasks
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
          <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={clac}/>
                  </div>
                  <div class = 'content'>
                    <h3>calculator</h3>
                    <p>bulit with html,css,and javascript this sleek calculator performs basic
                      arithmetic operations with ease.its user-friendly interface and responsive
                      design ensure accurate results for addition,subtraction,multiplication and division.
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
          <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={chesse} />
                  </div>
                  <div class = 'content'>
                    <h3>cheese product</h3>
                    <p>discover cheese perfection on our responsive website.crafted with html
                      css,and bootstrap 5 it's seamless experience on any device explore our
                      range,learn about our process,and order with ease.welcome to cheese hevan
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
          <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={movieapp} />
                  </div>
                  <div class = 'content'>
                    <h3>movie app</h3>
                    <p>a reactjs and axios powered movie serach website enabless users to easily
                      find and explore movies using dynamic interface and efficient data fetching.
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
          <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={loginpage} />
                  </div>
                  <div class = 'content'>
                    <h3>register and login</h3>
                    <p>a register and login page made with reactjs and redux allow users to create accounts
                      and log in securely.users provide information such as username and password to register
                      and then log in using their credentials.redux manages state,enabling dynamic ui updates
                      and secure authentication process.
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
          <div class = 'container'>
               <div class = 'card'>
                  <div class ='image'>
                    <img src ={planty} />
                  </div>
                  <div class = 'content'>
                    <h3>plantyx</h3>
                    <p>plantyx is reactjs based home plant sales offering a user friendly
                      interface for seamless shopping
                    </p>
                    <button className='get'>github</button>
                  </div>
               </div>    
          </div>
        </div>
      </section>
      <section className='back5' id='action5'>
      <div>
          <h1 style={{textAlign:'center',color:'white',padding:'1rem'}} >contact</h1>
        </div>
        <Row>
          <Col xs={12} md={6} lg={6}>
          <div className='contactbox'>
            <h2>Write us</h2>
            <input type="text" placeholder='Name' name='name' value={data.name} onChange={handlechange} />
            <input type="email" placeholder='email' name='email' value={data.email}  onChange={handlechange} />
            <input type="text" placeholder='message' name='message' value={data.message} onChange={handlechange}  />
            <button onClick={handlesubmit} className='send'>send</button>

          </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
          <div style={{textAlign:'center',color:'white',padding:'2rem'}}>
            <h1>keep in touch</h1>
            <h3 className='p-4'><img src={email} alt="email" style={{width:'10%'}} className='me-5' />vkabhinav638@gmail.com</h3>
            <h3 className='p-4'><img src={linkedin} alt="linkedin" style={{width:'20%'}} className='me-5' />abhinavvk</h3>
            <h3 className='p-4'><img src={github} alt="github" style={{width:'20%'}} className='me-5' />abhinavvk99</h3>
          </div>
          </Col>
        </Row>
      </section>
    </Container>
    </>
  );
}

export default ContainerExample;