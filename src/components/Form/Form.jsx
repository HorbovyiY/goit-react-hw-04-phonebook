import { useState} from "react";
import PropTypes from 'prop-types'

import { ContactsForm, Name, AddContact } from "./Form.styled";

export const Form = ({add}) => { 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => { 
        if (e.currentTarget.name === 'name') { 
            setName(e.currentTarget.value)
        }
        if (e.currentTarget.name === 'number') { 
            setNumber(e.currentTarget.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        add(name, number);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
            <ContactsForm onSubmit={onSubmit}>
                <label>
                    <Name>Name</Name>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <Name>Number</Name>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <AddContact type="submit">Add contact</AddContact>
            </ContactsForm>)
}

Form.propTypes = {
    add: PropTypes.func.isRequired,
}