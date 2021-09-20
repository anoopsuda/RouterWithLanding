import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";
import Dropdown from "./Dropdown";



export class Mainpages extends Component {
  state = {
    pageSelect: "PageA",
  };

  movetopagea = (event) => {
    this.setState({
      pageSelect: event.target.id,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageSelect !== this.state.pageSelect) {
      this.setState({
        pageSelect: this.state.pageSelect,
      });
    }
  }
  pagerender(info) {
    if (this.state.pageSelect === "PageA") {
      return <PageA />;
    } else if (this.state.pageSelect === "PageB") {
      return <PageB />;
    }
	else if (this.state.pageSelect === "PageC") {
		return <PageC />;
	  }
	  
  }

  render() {
    return (
      <div>
        <header className="d-flex justify-content-start">
<Link className="btn btn-link" to="/">Home</Link>
<button onClick={this.movetopagea} id="PageA" className={ this.state.pageSelect === "PageA" ? "active btn btn-link" : "default btn btn-link" }>
            Page A
          </button>
<button onClick={this.movetopagea}  id="PageB" className={this.state.pageSelect === "PageB" ? "active btn btn-link" : "default btn btn-link"}>
            Page B
          </button>
 <button onClick={this.movetopagea}  id="PageC" className={this.state.pageSelect === "PageC" ? "active btn btn-link" : "default btn btn-link"}>
            Page C
          </button>
          <Dropdown className="ml-auto" />
        </header>
        <section className="body-section"> {this.pagerender(this.state.pageSelect)}</section>
        <footer>footer</footer>
      </div>
    );
  }
}

export default Mainpages;
