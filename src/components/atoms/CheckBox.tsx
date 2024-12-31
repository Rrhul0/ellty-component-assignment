import React from 'react'

const CheckBox = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input
            type='checkbox'
            className='checkboxComponent'
            {...props}
        />
    )
}

export default CheckBox
