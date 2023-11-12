import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button,Dropdown } from "react-bootstrap";
import classNames from "classnames";
import SubMenuCrop from "./SubMenuCrop";

class SideBar extends React.Component {

  /*handleLogin = (userType) => {
    alert(`Logged in as ${userType}`);
    if (userType === 'Government') {
      this.props.onGovernmentSelect(true);
    } else {
      this.props.onGovernmentSelect(false);
    }
  };*/
  handleLogin = (userType) => {
    alert(`Logged in as ${userType}`);
    this.props.onGovernmentSelect(userType === 'Government');
  };

  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >

          </Button>
          <h3>LOGO</h3>
        </div>

        <Nav className="flex-column pt-2">
       
        <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Login As</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleLogin('Government')}>
                Government
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleLogin('Researchers')}>
                Researchers
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <SubMenu className="active"
            title="Macroeconomic (USD)"
            items={["GDP(USD)", "FDI Inflow(USD)","FDI Outflow(USD)"]}
          />

          <SubMenu
            title="Agriculture"
            items={["Contribution of Agri (% GDP)","Credit", "Fertilizer PROD","Fertilizer"]}
          />

          <SubMenu
            title="Debt Services"
            items={["Reserves", "GNI","Total Debt %"]}
          />  

          <SubMenuCrop
            title="Crops"
            items={["Banana","Mangoes", "Walnuts"]}
          />

          <Nav.Item>
            <Nav.Link href="/import">
              Import/Export Flow
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="http://3.145.176.169:3001/">
              Chatbot
            </Nav.Link>
          </Nav.Item>


        </Nav>
      </div>
    );
  }
}

export default SideBar;
