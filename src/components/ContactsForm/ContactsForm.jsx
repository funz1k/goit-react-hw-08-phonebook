import { useState } from "react";
import { Form, Label, Input, Button } from './ContactsForm.styled'

const ContactsForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onInputChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(name, number)
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={onInputChange}
                />
            </Label>
            <Label>
                <Input
                    type="tel"
                    name="number"
                    placeholder="Phone number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={onInputChange}
                />
            </Label>
            <Button type='submit'>Add contact</Button>
        </Form>
    )
}

export default ContactsForm;