import Contador from '../components/Contador'
import { useNavigate, useParams } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    return (
        <div>
            <h1>About Page</h1>
            <br />
            <p>Click the button to go to the Home page</p>
            <br />
            <p>Id: {id}</p>
            <br />
            <Contador />
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}

export default AboutPage;