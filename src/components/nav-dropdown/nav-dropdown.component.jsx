import React from 'react';
import "./nav-dropdown.styles.scss"
 
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const NavDropdown = ({history}) => {
    const handleSelect = category => {
        history.push(`/kategorie/${category}`)
    }

    return (
        <Dropdown alignRight size="sm" className="dropdown">
        <Dropdown.Toggle variant="link" id="dropdown-basic" >
         Kategorien
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>handleSelect("natur")}>Natur</Dropdown.Item>
          <Dropdown.Item onClick={()=>handleSelect("landschaften")}>Landschaften</Dropdown.Item>
          <Dropdown.Item onClick={()=>handleSelect("gebäude")}>Gebäude</Dropdown.Item>
          <Dropdown.Item onClick={()=>handleSelect("tiere")}>Tiere</Dropdown.Item>
          <Dropdown.Item onClick={()=>handleSelect("sport")}>Sport</Dropdown.Item>
          <Dropdown.Item onClick={()=>handleSelect("personen")}>Personen</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
}


export default withRouter(NavDropdown)

