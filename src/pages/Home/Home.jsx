import { NavLink } from "react-router-dom";
import { HomeContainer, Button, ButtonContainer, Link } from './Home.styled';

const Home = () => {

    return (
        <HomeContainer>
            <h1>
                My Phone book
            </h1>
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
