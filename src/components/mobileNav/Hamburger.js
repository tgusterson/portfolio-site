import React from 'react'

const Hamburger = (props) => {
  return (
    <div
      className={`hamburger ${props.open === true ? 'open' : 'closed'}`}
      tabIndex="0"
      role="button"
      onKeyPress={props.handleClick}
      onClick={props.handleClick}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}

export default Hamburger