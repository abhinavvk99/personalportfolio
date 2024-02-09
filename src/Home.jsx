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


function ContainerExample() {
  return (
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
        <img src={img01} alt="" style={{width:'20rem'}} className='rounded-5 ' />
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
            <img src={htmllogo} alt="" />
            <h4>html</h4>
          </div>
          <div className='box1'>
            <img src={css} alt="" />
            <h4>css 3</h4>
          </div>
          <div className='box1'>
            <img src={javascript} alt="" />
            <h4>javascript</h4>
          </div>
          <div className='box1'>
            <img src={boot} alt="" />
            <h4>bootstrap 5</h4>
          </div>
          <div className='box1'>
            <img src={react} alt="" />
            <h4>react.js</h4>
          </div>
          <div className='box1'>
            <img src={mongo} alt="" />
            <h4>mongodb</h4>
          </div>
          <div className='box1'>
            <img src={node} alt="" />
            <h4>node.js</h4>
          </div>
          <div className='box1'>
            <img src={express} alt="" />
            <h4>express.js</h4>
          </div>
          <div className='box1'>
            <img src={github} alt="" />
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
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
                    <h3>chesse product</h3>
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder textcommonly used to demonstrate the visualform of a document or a typeface withoutrelying on meaningful content.</p>
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
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='email' />
            <input type="text" placeholder='message' />

          </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
          <div style={{textAlign:'center',color:'white',padding:'2rem'}}>
            <h1>keep in touch</h1>
            <h3 className='p-4'><img src={email} alt="" style={{width:'10%'}} className='me-5' />vkabhinav638@gmail.com</h3>
            <h3 className='p-4'><img src={linkedin} alt="" style={{width:'20%'}} className='me-5' />abhinavvk</h3>
            <h3 className='p-4'><img src={github} alt="" style={{width:'20%'}} className='me-5' />abhinavvk99</h3>
          </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default ContainerExample;