import React from 'react';

class Launch extends React.Component{
	constructor(props){
		super(props);
		this.state ={count:0};
	}

	increaseLaunchCount(){
		this.setState(state =>({count:state.count+1}))
	}
	 render(){
		 return (
			 <div>
			 <div>You Have Launched {this.state.count} missiles.</div>
		 <button onClick={this.increaseLaunchCount.bind(this)}>Launch Missile</button>
		 </div>
		 )
	 }
 }
  export default Launch;