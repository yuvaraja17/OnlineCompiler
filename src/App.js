import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import logo from './Images/Logo.png';
import './index.css';
function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Coder
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Button variant="outline-success">Create New</ReactBootStrap.Button>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
      <div className="Upper-space"></div>
      {/* Body Part Area for coding.... */}
      <div className="body_part">
        <div className="Program-NavBar">
          <ReactBootStrap.Navbar collapseOnSelect expand="lg">
            <ReactBootStrap.Container>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="me-auto">
                  <div className="Program-List">
                    <ReactBootStrap.Form.Select aria-label="Floating label select example">
                      <option value="1">Java</option>
                      <option value="2">C++</option>
                      <option value="3">Python</option>
                    </ReactBootStrap.Form.Select>
                  </div>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <ReactBootStrap.Nav.Link href="#deets">Download</ReactBootStrap.Nav.Link>
                  <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                    Settings
                  </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
        </div>
        <ReactBootStrap.Form>
          <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <ReactBootStrap.Form.Control as="textarea" rows={12} />
          </ReactBootStrap.Form.Group>
        </ReactBootStrap.Form>
      </div>
      {/* Body Part Ends */}
      <div className="last-row">
        {/* Custom Input */}
        <div>
          <div className="compilebtn">
            <ReactBootStrap.Button variant="secondary">Compile Code</ReactBootStrap.Button>{' '}
          </div>
          <div className="custom_Input">
            {/* Check Box */}
            <ReactBootStrap.Form>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <ReactBootStrap.Form.Check
                    inline
                    label="Custom Input"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
            </ReactBootStrap.Form>
            {/* custom input box */}
            <ReactBootStrap.Form>
              <ReactBootStrap.Form.Group className="block-example border border-dark" controlId="exampleForm.ControlTextarea1">
                <ReactBootStrap.Form.Control as="textarea" rows={5} />
              </ReactBootStrap.Form.Group>
            </ReactBootStrap.Form>
            {/* compile button */}

          </div>
        </div>
        {/* <div className="compile_button">
        </div> */}
      </div>
      <div className="output_Part">
          <h4>Output : </h4>
          <></>
      </div>

    </div>
    // div main ends
  );
}

export default App;
