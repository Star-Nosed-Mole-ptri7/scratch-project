import React from "react";
import './aboutUs.css'

class GoalsComponent extends React.Component {
    render() {
        return (
            <div className="goalContainer">
                <img src="https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="display image" id="img"/>
                <h1 id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                </div>
        );
    }
}

export default GoalsComponent;