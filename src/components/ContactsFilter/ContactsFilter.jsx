import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Filter, FilterLabel } from './ContactsFilter.styled'
import { filterContact } from 'redux/ContactSlice';

const ContactsFilter = ({ filter }) => {
    const dispatch = useDispatch();

    return (
        <FilterLabel htmlFor="">
            <Filter
                type="text"
                placeholder="Find contacts by name"
                value={filter}
                onChange={e => dispatch(filterContact(e.currentTarget.value))} />
        </FilterLabel>
    )
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
};

export default ContactsFilter;