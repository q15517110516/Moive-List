import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
import {connect} from 'react-redux'
import {addList} from './Action'; 



class Home extends Component{
    handleClick = id =>{
        this.props.addList(id);
    }
    
    render(){
        return(
            <div>
                <NavLink to = "/MyList">My List</NavLink>          
                <div className="mylist">               
                    {this.props.recommendations.map(item => {
                        return(
                            <div>
                                <div key = {item.id} className = "movie">   
                                    <text>{item.title}</text>                         
                                    <img src = {item.img}/>
                                    <button onClick = {() => this.handleClick(item.id)}>ADD</button>
                                </div>
                            </div>
                            
                        )
                    })}
                </div> 
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    
    recommendations: state.recommendations
    
})

const mapDispatchToProps = (dispatch) =>{
    return{
        addList: id => dispatch(addList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);