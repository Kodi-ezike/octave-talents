import './home.css';
import Rectangle9 from './images/Rectangle9.svg';

const Home = () => {
    return (
        <div class="homewrapper">
            <div className='row row1'>
                <div className='col1'>
                    <h1>Outsourcing the best tech talents</h1>
                    <p>We provide the best technology talents to build solutions that best suit your needs.</p>
                </div>
                <div className='col2'></div> {/* Image is palced as a backgroundImage in css */}
            </div>
            <div className='row row2Background'>{/* Image is palced as a backgroundImage  in css */}
                <div className='row row2'>
                    <h2>For clients</h2>
                </div>
            </div>

        </div>
    )
}

export default Home;