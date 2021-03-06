import React,{Component} from "react";
import {Route } from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;
const Head=Loadable({
    loader:()=> import("../Head"),
    loading:Loading});
const Token=Loadable({
    loader:()=> import('../Token'),
    loading:Loading});
const Account=Loadable({
    loader:()=> import('../Account'),
    loading:Loading}); 
const Transaction=Loadable({
        loader:()=> import('../Transaction'),
        loading:Loading}); 
const Seting=Loadable({
        loader:()=> import('../Seting'),
        loading:Loading});
const Show=Loadable({
        loader:()=>import("../Show"),
        loading:Loading});     
export default class Main extends Component{
    componentDidMount(){
        console.log(this.props.match.url)
    }
    render(){
        return(
            <div>
                <Head/>
                <Route path={`${this.props.match.url}`} component={Show}></Route>
                <Route path={`${this.props.match.url}token`} exact component={Token}></Route>
                <Route path={`${this.props.match.url}account`} exact component={Account}></Route>
                <Route path={`${this.props.match.url}transaction`} exact component={Transaction}></Route>
                <Route path={`${this.props.match.url}seting`} exact component={Seting}></Route>
                {/* <Router>
                        <Switch>
                                <Route exact path={`${this.props.match.url}`} Component={Show}>
                                        <Router>
                                                <Switch>
                                                        <Route path={`${this.props.match.url}/Balance`} Component={Balance}></Route>
                                                        <Route path={`${this.props.match.url}/Historys`} Component={Historys}></Route>
                                                        <Route path={`${this.props.match.url}/LinkMan`} Component={LinkMan}></Route>
                                                </Switch>
                                        </Router>
                                </Route>
                                
                        </Switch>
                </Router> */}
            </div>
        )
    }
}