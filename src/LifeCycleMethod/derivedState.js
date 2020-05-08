import React from 'react';

class Header extends React.Component{
    constructor(props){
    super(props);
    this.state = {favouriteColor : "Red"}
    }

    static getDerivedStateFromProps(props,state){
        return {favouriteColor: props.favColour}
    }

    render(){
        return(
        <h1>My favourite color is {this.state.favouriteColor}</h1>
        )
    }
}

export default Header;