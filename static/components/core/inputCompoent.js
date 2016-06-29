import React, { PropTypes } from 'react'

const Input = ({classNameValue,placeHolderValue,keyDownFunction}) => (                    
                    <input className={classNameValue} type="text"  placeholder={placeHolderValue} onKeyDown={keyDownFunction} />
            );

Input.propTypes = {
    classNameValue : PropTypes.string.isRequired,
    placeHolderValue: PropTypes.string.isRequired,
    keyDownFunction: PropTypes.func
};
export default Input