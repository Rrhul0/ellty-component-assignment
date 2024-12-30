import { ReactNode } from 'react'

const Button = ({ children }: { children: ReactNode }) => {
    return <button className='buttonComponent'>{children}</button>
}

export default Button
