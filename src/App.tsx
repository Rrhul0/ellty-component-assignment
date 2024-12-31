import Button from './components/atoms/Button'
import CheckBox from './components/atoms/CheckBox'
import CheckboxOption from './components/molecules/CheckboxOption'

function App() {
    return (
        <div>
            <Button>Done</Button>
            <CheckBox />
            <CheckboxOption label='Option 1' />
        </div>
    )
}

export default App
