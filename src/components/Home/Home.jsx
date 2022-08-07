import Proj from '../Proj/Proj';
import './Home.css';
import {Link} from 'react-router-dom';
import image from '../img/proj.png';

const Home = () => {

    return ( 
        <div className="a container-fluid">
            <div className="row back">

                <div className="col-sm-12">

                    <div className="i-left-wrapper">
                        <h2 className='i-intro'>HELLO, MY NAME IS</h2>
                        <h1 className='i-name'>HARSH MOHTA</h1>

                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">UI/UX Designer</div>
                                <div className="i-title-item">Programmer</div>
                                <div className="i-title-item">Student</div>
                                <div className="i-title-item">Learner</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row desc">
                <div className='col-md-6'>
                    <Proj url={image} color="#f3b9ff"/>
                </div> 
                <div className='col-md-6'>
                        I specialize in creating stylish and modern web services 
                        and program scalable and responsive web applications for 
                        customers of all sizes. I'm quietly confident, naturally 
                        curious, and perpetually working everday on improving my skills.
                </div>
            </div>

            <hr/>
             
               
            <div class="container-fluid conv">
               <h2>Interested in collaborating or investing?</h2>
               <p>I'm always open to discussing product design work or partnership opportunities.</p>
               <Link to = '/Cont'><button type="button" class="btn btn-outline-secondary btn-md">Start a Conversation</button></Link>
           </div>
            
        </div>
     );
}
 
export default Home;