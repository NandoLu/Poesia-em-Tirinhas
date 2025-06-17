import RoleSelector from '../RoleSelector';
import TextInput from '../TextInput';
import './Form.css'

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados</h2>
                <TextInput label="Nome" placeholder="Digite o nome do artista"/>
                <TextInput label="E-mail" placeholder="Digite o email do artista"/>
                <RoleSelector label="Posto"/>
            </form>

        </section>

    )
}
export default Form;