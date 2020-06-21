import React from 'react'
import './input.styles.scss'

const Input = ({ handelChange, lable, ...otherProps }) => (
    <div className='input-container'>
        <input className='form-input' onChange={handelChange} {...otherProps} />
        {
            lable ?
                (
                    <lable
                        className={`${
                            otherProps.value.length ? 'shrink' : ''}
                        form-input-label`}>
                        {lable}

                    </lable>)
                : null
        }
    </div>
);

export default Input;