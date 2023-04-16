import PropTypes from 'prop-types'

import { Item, DeleteContact } from "./Contacts.styled";

export const Contacts = ({ contacts, filter, del }) => { 
    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) =>
                        <Item key={id}>
                            {name}: {number}
                            <DeleteContact type="button" onClick={()=>{del(id)}}>Delete</DeleteContact>
                        </Item>
                ):
                contacts.map(({ id, name, number }) => 
                    <Item key={id}>
                        {name}: {number}
                        <DeleteContact type="button" onClick={()=>{del(id)}}>Delete</DeleteContact>
                    </Item>
                )
            }
        </ul>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    filter: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired,
}