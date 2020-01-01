import React from 'react'

class Search extends React.Component {
    handleChange = (e) => {
        this.props.handleFilterTextChange(e.target.value);
    }
    render() {
        return (
            <input className="form-control " onChange={this.handleChange} style={searchInput} type="text" placeholder="Search movies"></input>
        );
    }
}

export default Search;

const searchInput = {
    marginTop: '10px'
}