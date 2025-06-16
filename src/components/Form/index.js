import TextInput from '../TextInput';
import './Form.css'

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados</h2>
                <TextInput label="Bom" placeholder="dia"/>
            </form>

        </section>

    )
}
export default Form;