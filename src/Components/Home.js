import './home.css';

const Home = () => {

    return (
        <div class="homewrapper">
            <div className='row1'>
                <div className='col1'>
                    <h1>Outsourcing the best tech talents</h1>
                    <p>We provide the best technology talents to build solutions that best suit your needs.</p>
                </div>
                <div className='col2'></div>
            </div>
            <div className='row2Background'>
                <div className=' row2'>
                    <h2>For clients</h2>
                    <div className='first-div'>
                        <h1>Hire excellent talents</h1>
                        <p>
                            Work with talents that have been trained by Octave to provide excellent solutions with a professional
                        </p>
                    </div>
                    <div className='feture_container'>
                        <div className='feature'>
                            <p>Post a job<br/> and hire a talent</p>
                        </div>
                        <div className='feature'>
                            <p>Find customizable<br/> templates</p>
                        </div>
                        <div className='feature'>
                            <p>Request the<br/> specific talents</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row3'>
                <div className='row3col1'>
                    <h1>Hire a talent<br/> for specific skills</h1>
                    <ul>
                        <li>Data analytics </li>
                        <li>Business intelligence consultant</li>
                        <li>Digital marketer</li>
                        <li>Website development</li>
                        <li>IT & technical support</li>
                        <li>Machine learning & AI</li>
                        <li>See all specializations</li>
                    </ul>
                </div>
                <div className='row3col2'>
                </div>
            </div>
            <div className='row row4'>
                <div className='row4col1'>
                </div>
                <div className='row4col2'>
                    <h2 className='block'>For talent</h2>
                    <h1 className='block'>Find great<br/> work</h1>
                    <p className='block'>Meet clients you’re excited to work with and take your career or business to new heights.</p>
                    <div className='block'>
                        <div className='row4col2SubDiv'>
                            <p>Find opportunities<br/> for every stage of<br/> your freelance<br/> career</p>
                        </div>
                        <div className='row4col2SubDiv'>
                            <p>Control when, where,<br/> and how you work</p>
                        </div>
                        <div className='row4col2SubDiv'>
                            <p>Explore different<br/> ways to earn</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;