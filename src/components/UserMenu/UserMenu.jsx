import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);

    return (
        <div>
            <span>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                <TbLogout size="30" />
            </button>
        </div>
    );
};

export default UserMenu;