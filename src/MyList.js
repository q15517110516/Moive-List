import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {removeList} from './Action';
import {connect} from 'react-redux';


class MyList extends Component{

    handleClick = id =>{
        this.props.removeList(id);
    }
    render(){
        return(
            <div>
                <NavLink to = "/">Home</NavLink>          
                <div className="home">                
                    {this.props.mylist.map(item => {
                        return(
                            <div>
                                <div key = {item.id} className = "movie">                            
                                    <text>{item.title}</text>     
                                    <img src = {item.img}/>
                                    <button onClick = {() => this.handleClick(item.id)}>Remove</button>
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
    
    mylist: state.mylist
    
})

const mapDispatchToProps = (dispatch) =>{
    return{
        removeList: id => dispatch(removeList(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyList);