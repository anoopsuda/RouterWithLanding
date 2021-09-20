import React, { Component } from 'react'

import AddItem from "./AddItem";
import EditItem from "./EditItem";
import CommentItem from "./CommentItem";

export class PageC extends Component {

	state = {
		pageSelect: "AddItem",
	  };

	  movetosubpages = (event) => {
		this.setState({
		  pageSelect: event.target.id
		
		  
		  
		});
		console.log(this.state.pageSelect);
	  };
	 
	  componentDidUpdate(prevProps, prevState) {
		if (prevState.pageSelect !== this.state.pageSelect) {
		  this.setState({
			pageSelect: this.state.pageSelect,
		  });
		}
	  }
	  pagerender(info) {
		if (this.state.pageSelect === "AddItem") {
		  return <AddItem />;
		} else if (this.state.pageSelect === "EditItem") {
		  return <EditItem />;
		}
		else if (this.state.pageSelect === "CommentItem") {
			return <CommentItem />;
		  }
		  
	  }



	render() {
		return (
			<>
			<div className="p-3 mb-2 bg-info text-white">
				PageC 
				<p>Demo Page Update Stage one</p>
				{/*<button onClick={this.movetopagea} className={this.state.pageSelect === "AddItem" ? "active btn btn-link" : "default btn btn-link"}>*/}
				<a  className="btn btn-warning mr-4"    onClick={this.movetosubpages} id="AddItem">Add Item</a> 
				<a  className="btn btn-warning mr-4"   onClick={this.movetosubpages} id="EditItem">Edit Item</a>
				<a  className="btn btn-warning"    onClick={this.movetosubpages} id="CommentItem">Comment Item</a>

 


			</div>

<section className="body-section"> {this.pagerender(this.state.pageSelect)}</section>
</>
		)
	}
}

export default PageC
