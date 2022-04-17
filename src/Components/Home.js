import './home.css';
import Rectangle9 from './images/Rectangle9.svg';

const Home = () => {
    return (
        <div class="homewrapper">
            <div className='row1'>
                <div className='col1'>
                    <h1>Outsourcing the best tech talents</h1>
                    <p>We provide the best technology talents to build solutions that best suit your needs.</p>
                </div>
                <div className='col2'>
                    <div className="image1"> Image</div>
                </div>
            </div>
            <div className='row2' style={{backgroundImage: `url(${Rectangle9})`, backgroundRepeat:'no-repeat', backgroundSize: "cover"}}>
                <p>sadvasd</p>

            </div>
        </div>
    )
}

export default Home;