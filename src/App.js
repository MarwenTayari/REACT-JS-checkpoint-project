import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { Navbar ,Container,Row,Col, Button} from 'react-bootstrap'



function App() {
  return (
    <div className="App">

       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://himanshujanbandhu.github.io/Opencode-Collaborative-19/assets/img/projects/frontend.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Navbar>
        
        <Container>
          <div class="titlediv">
            <h1 class="title"> CONTACT ME </h1> 
            <h5 class="title"> Please use the form below to submit me an e-mail with your questions :   </h5> 
          </div>

       <Form >
            <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label class="FormLabel">First Name :</Form.Label>
                    <Form.Control placeholder="Enter Your First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label class="FormLabel">Last Name :</Form.Label>
                    <Form.Control  placeholder="Enter Your Last Name" />
                  </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label class="FormLabel">Address :</Form.Label>
              <Form.Control placeholder="Enter Your Adress" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
                <Form.Label class="FormLabel">Email :</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label class="FormLabel">Your Message :</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message here"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>

        </Form>  
       
        <div class="ContactMe">
          <p>
            &#127968; <i>43 Rue El Omrane Hammam Sousse 4011, Sousse, Tunisie</i
            ><br />
            &#128222; <i>(+216) 92 06 72 45</i><br />
            &#128231;
            <a href="mailto:tayarimarwen@gmail.com"
              ><i>tayarimarwen@gmail.com</i></a>
            <br />
            <a href="https://www.linkedin.com/in/marwen-tayari-28999910a/" target="_blank"
              ><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
            <a
              href="https://github.com/MarwenTayari?tab=repositories"
              target="_blank"
              ><img src="https://img.icons8.com/fluent/48/000000/github.png"
            /></a>
            <a href="https://www.facebook.com/marwen.tayari" target="_blank"
              ><img src="https://img.icons8.com/color/48/000000/facebook.png"
            /></a>
          </p>
        </div>   
</Container>

    <footer>
      <p id="footerContent"> <i>© 2020 Marwen Tayari , All rights reserved.</i></p>
    </footer>
          
    </div>
  );
}

export default App;
