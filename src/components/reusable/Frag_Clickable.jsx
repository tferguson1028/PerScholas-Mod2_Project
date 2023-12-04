import React from 'react';
import PropTypes from 'prop-types';

function Frag_Clickable(props) {
  // https://blog.logrocket.com/complete-guide-react-default-props/
  const { dispatch = () => {}, state = null, action = {action: null, payload: null}} = props;
  return (
    <div className="clickableContainer" style={{opacity: 0, position: "relative", width: "100%", height: "100%"}}>
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
      </button>
    </div>
  )
}

Frag_Clickable.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.any,
  action: PropTypes.object
}

export default Frag_Clickable;