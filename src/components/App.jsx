import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import KegList from './KegList';
import Error404 from './Error404';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterList: [
        {
          name: 'Guiness Draught',
          brand: 'Guiness',
          price: '205',
          alc: '4.20'
        },
        {
          name: 'Blue Moon - Belgian White',
          brand: 'Blue Moon',
          price: '150',
          alc: '5.40'
        },
        {
          name: 'Mannys Pale Ale',
          brand: 'Mannys',
          price: '140',
          alc: '5.40'
        },
        {
          name: 'Deschutes IPA',
          brand: 'Deschutes',
          price: '190',
          alc: '7.00'
        }
      ]
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
        <Switch>
          <Route exact path = '/' render = {() => <KegList masterList = {this.state.masterList} />} />
          <Route path = '/newkeg' render = {() => <NewKegControl onNewKegCreation = {this.handleAddingNewKegToList} />} />
          <Route path = '/contact' component = {Contact} />
          <Route component = {Error404} />
        </Switch>
      </div>
    );
  }
}



export default App;
