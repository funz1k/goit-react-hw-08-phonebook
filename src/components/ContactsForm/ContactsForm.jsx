import { Component } from "react";
import { Form, Label, Input, Button } from './ContactsForm.styled'

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    }

    onInputChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { number, name } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.onInputChange}
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
                        onChange={this.onInputChange}
                    />
                </Label>
                <Button type='submit'>Add contact</Button>
            </Form>
        )
    }
}

export default ContactsForm;