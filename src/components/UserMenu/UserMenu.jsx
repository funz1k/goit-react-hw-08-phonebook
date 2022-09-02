import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import { TbLogout } from 'react-icons/tb';
import { UserInformation, UserBlock, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);

    return (
        <UserBlock>
            <UserInformation>Welcome, {name}</UserInformation>
            <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>
                <TbLogout size="25" />
            </LogOutButton>
        </UserBlock>
    );
};

export default UserMenu;