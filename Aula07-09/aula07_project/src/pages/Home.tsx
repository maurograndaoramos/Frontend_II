import FocusInput  from '../components/FocusInput'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>HomePage</h1>
            <br />
            <p>Click the button to go to the About page</p>
            <br />
            <FocusInput />

            <button onClick={() => navigate('/about')}>Go to About</button>
        </div>
    );
}

export default HomePage;