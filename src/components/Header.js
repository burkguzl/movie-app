import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div style={headerContainer}>
                <span style={headerText}>Movies</span>
            </div>
        );
    }
}

export default Header;

const headerContainer = {
    backgroundColor: 'black',
    padding: '15px 0',
    color: 'white'
};

const headerText = {
    fontSize: '18px',
    fontWeight: 'bold',
}