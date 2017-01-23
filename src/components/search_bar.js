import React,{Component} from 'react';

//use class for state
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={term:''};
    }
    render(){
        //use onChange event on input to handle event and pass the handler.
       
        return (
        <div className="search-bar">
            <input value={this.state.term} onChange={event=>this.onInputChange(event.target.value)} />
        </div>

        );
}

    //event handler
    onInputChange(event){
        this.setState({term:event});
        this.props.onSearchTermChange(event);
        console.log(event.target.value);
    }
}

export default SearchBar;