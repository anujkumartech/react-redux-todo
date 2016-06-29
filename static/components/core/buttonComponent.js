import React, { PropTypes } from 'react'

const Button = ({classNameValue,textVal,clickFunction}) => (                    
                    <button className={classNameValue} onClick={clickFunction}>{textVal}</button> 
            );

Button.propTypes = {
    classNameValue : PropTypes.string.isRequired,
    textVal: PropTypes.string.isRequired,
    clickFunction: PropTypes.func.isRequired
};
export default Button