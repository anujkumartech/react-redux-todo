import React, { PropTypes } from 'react'

const Input = ({classNameValue,placeHolderValue,keyDownFunction,onChangeFunction}) => (                    
                    <input className={classNameValue} type="text"  placeholder={placeHolderValue} onKeyDown={keyDownFunction} onChange={onChangeFunction}/>
            );

Input.propTypes = {
    classNameValue : PropTypes.string.isRequired,
    placeHolderValue: PropTypes.string.isRequired,
    keyDownFunction: PropTypes.func,
    onChangeFunction:PropTypes.func
};
export default Input