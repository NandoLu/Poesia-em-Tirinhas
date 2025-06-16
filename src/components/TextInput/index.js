import './TextInput.css'

const TextInput = (props) => {
    // console.log(TextInput.props)
    const placeholdermodificada = `${props.placeholder}...`
    return (
        <div className='text-input'>
            <label>
                {props.label}
            </label>
            <input placeholder={placeholdermodificada}/>
        </div>


    )
}
export default TextInput;