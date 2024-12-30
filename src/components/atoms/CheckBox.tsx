import React from 'react'

const CheckBox = (
    props: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
) => {
    return (
        <input
            type='checkbox'
            className='checkboxComponent'
            {...props}
        />
    )
}

export default CheckBox
