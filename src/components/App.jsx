import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import KegList from './KegList';
import Error404 from './Error404';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterList = this.state.masterList.slice();
    newMasterList.push(newKeg);
    this.setState({masterList: newMasterList});
  }
  render(){
    return (
      <div className="container">
        <style jsx global>{`
            body {
              font-family: Trebuchet MS;
              padding: 30px;
              background-color: #80DAFF;
            }
            `}</style>
        <NavBar/>
        <Header/>
        <About/>
        <Switch>
          <Route exact path = '/' render = {() => <KegList kegList = {this.state.masterList} />} />
          <Route path = '/newkeg' render = {() => <NewKegControl onNewKegCreation = {this.handleAddingNewKegToList} />} />
          <Route path = '/contact' component = {Contact} />
          <Route component = {Error404} />
        </Switch>
      </div>
    );
  }
}



export default App;
