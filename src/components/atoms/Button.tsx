const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className='buttonComponent'
            {...props}
        />
    )
}

export default Button
