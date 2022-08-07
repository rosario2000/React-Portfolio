import '../Profiles/profiles.css';
import Proj from '../Proj/Proj';
import lc from '../img/lc.png';
import gfg from '../img/gfg.png';
import ib from '../img/ib.png';
import lin from '../img/lin.png';

const Profiles = () => {

    return ( 
        <div className='pro container-fluid'>
             <div className="row">

                <div className="col-md-6">
                    <div className='lc'>
                        <a href="https://leetcode.com/rosario1975/" target="_blank" rel="noreferrer">
                        <Proj url={lc} color="#444444"/>
                        </a>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className='gfg'>
                        <a href="https://auth.geeksforgeeks.org/user/harshmohta2000/profile" target="_blank" rel="noreferrer">
                        <Proj url={gfg} color="#444444"/>
                        </a>
                    </div>
                </div>

             </div>

             <div className="row">

                <div className="col-md-6">
                    <div className='lin'>
                        <a href="https://www.linkedin.com/in/harsh-mohta-844214191/" target="_blank" rel="noreferrer">
                            <Proj url={lin} color="#444444"/>
                        </a>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className='ib'>
                        <a href="https://www.interviewbit.com/profile/harshmohta2000_569502ceeead" target="_blank" rel="noreferrer">
                           <Proj url={ib} color="#444444"/>
                        </a>
                    </div>
                </div>

             </div>

             <div className='pro-desc'>
                I have a keen interest in programming. 
                Therefore, I am familiar to algorithms, their design {"&"} analysis.
                I'm also aware of the various Data Structures used
                 to store data, and their applications in day to day lives.
                 I ve solved around 600 {"(and counting:)"}  coding problems over various platforms.
                 
             </div>

        </div>
     );
}
 
export default Profiles;
