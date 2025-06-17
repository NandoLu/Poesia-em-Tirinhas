import './RoleSelector.css'

const RoleSelector = (props) => {
    console.log(props.RoleSelector)
    return (
        <div className='role-selector'>
            <label>{props.label}</label>
            <select required={props.required}>
                <option>Artista</option>
                <option>Orientador</option>
                <option>Mídia</option>
            </select>
        </div>
    )
}
export default RoleSelector