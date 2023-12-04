import React from 'react';
import PropTypes from 'prop-types';

function Frag_Clickable( props ) {
  return (
    <div className="clickableContainer" style={{opacity: 0, position: "relative", width: "100%", height: "100%"}}>
      <button 
        onClick={() => {props.dispatch(props.state, props.payload)}}
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
  dispatch: PropTypes.string,
  state: PropTypes.any,
  payload: PropTypes.object
}

export default Frag_Clickable;