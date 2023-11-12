import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/content/Navbar";
import Content from "./components/content/Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      isOpen: false,
      isMobile: true,
      isGovernmentSelected: false // Track if "Government" is selected
    };

    this.previousWidth = -1;
  }

  updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({ isOpen: !isMobile });
    }

    this.previousWidth = width;
  };

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleGovernmentSelection = (selected) => {
    this.setState({ isGovernmentSelected: selected });
  };

  render() {
    return (
      <div className="App wrapper">
        <SideBar 
          toggle={this.toggle} 
          isOpen={this.state.isOpen} 
          onGovernmentSelect={this.handleGovernmentSelection}
        />
        <NavBar 
          isGovernmentSelected={this.state.isGovernmentSelected}
        />
        <Content 
          toggle={this.toggle} 
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

export default App;
