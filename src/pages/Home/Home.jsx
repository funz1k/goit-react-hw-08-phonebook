import { HomeContainer, Button, ButtonContainer, Link, HomeTitle, TitleElem } from './Home.styled';

const Home = () => {

    return (
        <HomeContainer>
            <HomeTitle>
                <TitleElem>My</TitleElem>
                <TitleElem>Phonebook</TitleElem>
            </HomeTitle>
            <ButtonContainer>
                <Button>
                    <Link to="/login">Sign In</Link>
                </Button>
                <Button>
                    <Link to="/register">Sign Up</Link>
                </Button>
            </ButtonContainer>
        </HomeContainer>
    )
}

export default Home;
