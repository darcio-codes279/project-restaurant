import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <Navbar bg= "dark" variant='dark'
        sticky='top' expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width='40px' height='40px'/>
            Massala 
          </Navbar.Brand>
<Navbar.Toggle/>
<Navbar.Collapse>
<Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href='products/tea'>Tea</NavDropdown.Item>
              <NavDropdown.Item href='products/coffee'>Coffee</NavDropdown.Item>
              <NavDropdown.Item href='products/Hot Chocolate'>Hot Chocolate</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href='products/promo'>promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='Blog'>Blog</Nav.Link>
            <Nav.Link href='About us'>About us</Nav.Link>
            <Nav.Link href='Contact us'>Contact us</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
          <Navbar.Collapse/>
</Navbar.Collapse>
      </Navbar>
      <div className='content'>
        This is a navigation bar
      </div>
    </div>
  );
}

export default App;
