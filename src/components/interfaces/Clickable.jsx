import React from 'react';
import PropTypes from 'prop-types';

function Clickable(props) {
  // https://blog.logrocket.com/complete-guide-react-default-props/
  const { children = <></>, dispatch = () => {}, state = null, action = {action: null, payload: null}} = props;
  return (
    <div className="ClickableContainer" style={{opacity: 0, position: "relative", width: "100%", height: "100%"}}>
      <button 
        onClick={() => {dispatch(state, action)}}
        style={{
          position: "absolute",
          // visibility: 'hidden',
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        {props.children}
      </button>
    </div>
  )
}

Clickable.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.any,
  action: PropTypes.object
}

export default Clickable;
