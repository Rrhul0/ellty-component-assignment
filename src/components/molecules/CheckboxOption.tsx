import CheckBox from '../atoms/CheckBox'

const CheckboxOption = ({ label }: { label: string }) => {
    return (
        <label className='checkboxOptionComponent'>
            <span>{label}</span>
            <CheckBox />
        </label>
    )
}

export default CheckboxOption
