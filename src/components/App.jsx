import {useState, useEffect} from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Title } from "./App.styled";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => { 
    const contactsBook = JSON.parse(localStorage.getItem("contacts"));
    if (contactsBook) {setContacts(contactsBook)}
  }, [])
  
  useEffect(() => { 
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])

  const addContact = (name, number) => { 
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    const isNameInContacts = contacts.filter(item => item.name === name).length;

      (isNameInContacts) ?
      alert("This name is already in contacts"):
      setContacts(prevState => [contact, ...prevState] )
  }

  const deleteContact = (id) => { 
    setContacts(prevState => prevState.filter(item => item.id !== id) )
  }

  const toFilter = (text) => { 
    setFilter(text)
  }

return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Title>Phonebook</Title>  
        <Form add={addContact} />

      <Title>Contacts</Title>
        <Filter text={filter} toFilter={toFilter} />
        <Contacts contacts={contacts} filter={filter} del={deleteContact} />
    </div>
  );
};
