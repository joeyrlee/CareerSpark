import React from 'react';
import Header from './Header.jsx'
import User from './User.jsx'

export default class UserEntryView extends React.Component {

    // this.state = {
    //   user: {},
    //   pendingConnectionsIncoming: [],
    //   pendingConnectionsOutgoing: [],
    //   acceptedConnections: [],
    //   suggestedConnections: [],
    // }
  constructor(props) {
<<<<<<< 4ae0f62771d428f7835b02a56b0a61cb78a35277
<<<<<<< 30eb4b88847b69a702936449c73d73bcd3d065a0
=======
    console.log('15', props);
>>>>>>> populate mock data, swiping working
   super(props);
   this.state = {current: this.props.user.pendingConnectionsIncoming[0],
     currentList: this.props.user.pendingConnectionsIncoming}
  }

  clickYes() {
    console.log('21 YES');
    var currUser = this.state.currentList.shift();
    this.setState({current: this.state.currentList[0]});

    if(this.state.currentList === this.props.user.suggestedConnections) {
      //click 'yes' on suggestedConnection - add to pending outGoing connection
      this.props.user.pendingConnectionsOutgoing.push(currUser);
    }

    //change the current list from pendingConnectionsIncoming to suggested
    //suggestedConnections once we accept all pendingConnectionsIncoming
    if(this.state.currentList === this.props.user.pendingConnectionsIncoming) {
       //accept incoming connections
       this.props.user.acceptedConnections.push(currUser);

      if(this.props.user.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.user.suggestedConnections});
      }
    }
  }

  clickNo() {
        console.log('21 NO');

    if(this.props.user.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.user.suggestedConnections});
    }
    this.state.currentList.shift();
    this.setState({current: this.state.currentList[0]});



=======
    super(props);
    this.state.user = props.user;
    //this.state.counter = 0;
    // this.state.currentList =
    //   props.pendingConnectionsIncoming.length > 0 ?
    //   props.pendingConnectionsIncoming :
    //   props.suggestedConnections;

    this.state.counter = 0;
  }

  clickYes() {
    console.log('added');
    if(this.state.currentList === this.props.pendingConnectionsIncoming) {
      if(this. props.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.suggestedConnections});
      }
    }
    this.state.currentList.splice()
    props.acceptedConnections.push(this.state.user);
  }

  clickNo() {
    console.log('rejected');
>>>>>>> Added basic swiping functionality
  }

  render() {
    return (
            <div>
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
             onClick={()=>{this.clickNo()}}
             />
<<<<<<< 30eb4b88847b69a702936449c73d73bcd3d065a0
          <User currentConnection={this.state.current} />

=======
          <User currentConnection={this.state.user} />
>>>>>>> Added basic swiping functionality
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
             onClick={()=>{this.clickYes()}}
             />
             </div>
            )
          }
        }

