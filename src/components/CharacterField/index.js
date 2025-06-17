import './CharacterField.css'

const CharacterField = (props) => {
    console.log(props.CharacterField)
    return (
        <div className='character-field'>
            <label>{props.label}</label>
            <select required={props.required}>
                <option>Artista</option>
                <option>Orientador</option>
            </select>
        </div>
    )
}
export default CharacterField