import CheckBox from '../atoms/CheckBox'

type CheckboxInputType = React.ComponentPropsWithRef<typeof CheckBox>

const CheckboxOption = ({
    label,
    ...props
}: { label: string } & CheckboxInputType) => {
    return (
        <label className='checkboxOptionComponent'>
            <span>{label}</span>
            <CheckBox {...props} />
        </label>
    )
}

export default CheckboxOption
