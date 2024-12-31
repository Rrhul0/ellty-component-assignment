import CheckboxOption from '../molecules/CheckboxOption'
import Button from '../atoms/Button'
import Divider from '../atoms/Divider'
import { useState } from 'react'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4']

const Menu = () => {
    const [selectedPages, setSelectedPages] = useState<string[]>([])

    const onClick = () => {
        alert('You have selected ' + selectedPages.join(', '))
    }

    return (
        <div
            className='menu'
            role='menuitemcheckbox'
        >
            <CheckboxOption
                label='All pages'
                checked={selectedPages.length === PAGES.length}
                onChange={e => {
                    if (e.currentTarget.checked) {
                        setSelectedPages(PAGES)
                    } else {
                        setSelectedPages([])
                    }
                }}
            />
            <div className='wrapper'>
                <Divider />
            </div>
            {PAGES.map(page => (
                <CheckboxOption
                    key={page}
                    label={page}
                    checked={selectedPages.includes(page)}
                    onChange={e => {
                        if (e.currentTarget.checked) {
                            setSelectedPages([...selectedPages, page])
                        } else {
                            setSelectedPages(
                                selectedPages.filter(p => p !== page)
                            )
                        }
                    }}
                />
            ))}
            <div className='wrapper'>
                <Divider />
            </div>
            <div className='wrapper'>
                <Button onClick={onClick}>Done</Button>
            </div>
        </div>
    )
}

export default Menu
