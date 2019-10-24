import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField,requestRobots} from '../actions.js';
import Header from '../components/Header';
//You get this from the store in the index.js
const mapStateToProps = (state) => {
    return {
       searchField: state.searchRobots.searchField,
       robots: state.requestRobots.robots,
       isPending: state.requestRobots.isPending,
       error: state.requestRobots.error
    }
}
//dispatch it triggers the action in the reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //requestRobots(dispatch) == dispatch(requestRobots())
        //the reason why you do it this way is for redux-thunk to know to set dispatch as argument
        onRequestRobots: () => dispatch(requestRobots()) 
    }
}

 class App extends Component {


    componentDidMount(){
       this.props.onRequestRobots();
    }


    render(){
        const {searchField, onSearchChange,robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if(isPending){
            return <h1 className="tc">Loading</h1>
        }else{
        return(
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                </Scroll>
            </div>
        )
        }
    }
}
//connect is a higher order function that returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);//so basically connect does something in the app component and then it returns the app component

