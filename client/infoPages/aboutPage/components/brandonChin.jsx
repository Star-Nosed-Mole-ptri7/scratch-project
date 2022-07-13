import React from "react";
import './aboutUs.css'

class BrandonComponent extends React.Component {
    render() {
        return (
            <div className="brandonContainer">
                <div className="brandonTextAndName">
                    <div>
                        <h1 id='name' >Brandon Chin</h1>
                    </div>
                    <div id='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <img src="https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg" alt="display image" id="img" />
            </div>
        );
    }
}

export default BrandonComponent;