import './Edu.css';
import Designer from '../img/designer.svg';
import Developer from '../img/developer.svg';
import Education from '../img/education.svg';
import Comp from '../img/comp.svg';

const Edu = () => {
    return ( 
        <div className="e">

            <div className='ed container-fluid'>
    
            <div className="row">
                <div className="col-md-6">
                   <div className='ed-card'> 
                   <h2 className='ed-head'>Graduation</h2>
                    <h5 className='ed-inst'>Delhi Technological University</h5>
                    <div className='ed-desc'>Bachelor of Technology in Computer Engineering</div>
                    <div className='ed-time'>2019 - Present</div>
                    <div className='ed-grade'>8.25 GPA</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='ed-card'>
                    <h2 className='ed-head'>Joint Entrance Examination</h2>
                    <h5 className='ed-inst'>CSRL National Super 100</h5>
                    <div className='ed-time'>2018 - 2019</div>
                    <div className='ed-grade'>98.58 Percentile</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className='ed-card'>
                    <h2 className='ed-head'>Senior Secondary</h2>
                    <h5 className='ed-inst'>Rishabh Public School</h5>
                    <div className='ed-desc'>Physics | Chemistry | Mathematics</div>
                    <div className='ed-time'>2017 - 2018</div>
                    <div className='ed-grade'>95% (PCM)</div>
                    </div>
                </div>

                <div className="col-md-6">
                   <div className='ed-card'>
                    <h2 className='ed-head'>Matriculation</h2>
                    <h5 className='ed-inst'>Rishabh Public School</h5>
                    <div className='ed-time'>2015 - 2016</div>
                    <div className='ed-grade'>8.6 GPA</div>
                    </div>
                </div>
            </div>
            </div>


            <div className="comp-img"><img src={Comp} className="img-fluid" alt="computerpicture"/></div>
            <div className="container-fluid section">
        <div className="row">
            <div className="c1 col-md-4" >
                <img src={Designer} alt="design-symbol"/>
                <h2>Designer</h2>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <h4>Things I enjoy designing:</h4>
                <p>UX, UI, Web and Mobile Apps, Logos</p>
            </div>
            <div className="col-md-4">
                <img src={Developer} alt="design-symbol"/>
                <h2>Front-End Developer</h2>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h4>Preferred TechStack:</h4>
                <p>HTML, CSS, Javascript, ReactJs, NodeJs</p>
            </div>
            <div className="c3 col-md-4 ">
                <img src={Education} alt="design-symbol"/>
                <h2>Student</h2>
                <p>I'm currently in my third year of pursuing Bachelor Of Technology in Computer Engineering.</p>
                <h4>Technical Knowledge:</h4>
                <p>C, C++, Data Structures {"&"} Algorithms, OOP, Git</p>
            </div>
        </div>
    </div>

        </div>
     );
}
 
export default Edu;