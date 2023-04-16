import PropTypes from 'prop-types'

import { Title, FilterWrapper } from "./Filter.styled";

export const Filter = ({ text, toFilter }) => { 
    return (
        <FilterWrapper>
            <Title>Find contacts by name</Title>
            <input
                type="text"
                value={text}
                onChange={(e) => {toFilter(e.currentTarget.value) }}
            />
        </FilterWrapper>
    )
}

Filter.propTypes={ 
    text: PropTypes.string.isRequired,
    toFilter: PropTypes.func.isRequired,
}
