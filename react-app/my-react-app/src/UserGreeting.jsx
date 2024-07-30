import PropTypes from "prop-types";

const UserGreeting = ({isLoggedIn=false,username="Guest" }) => {

  const welcomeMessage = <h2 className="welcome">Welcome {username}</h2> 

  const loginPrompt = <h2 className="login">Please log in</h2>

  return isLoggedIn ? welcomeMessage : loginPrompt ;
                            
};

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting;
