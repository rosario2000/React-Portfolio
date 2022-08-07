import './Nav.css';
import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <div className="n container-fluid">
            <div className="row">

                <div className="n-logo col-md-6">
                    <Link to ='/'><h1>HARSH MOHTA</h1></Link>
                </div>

                <div className="n-list col-md-6">
                    <div className='n-list row'>

                       <div className="col-sm-3">
                       <Link to ='/'>HOME</Link>
                       </div>
                       <div className="col-sm-3">
                       <Link to ='/Edu'>ABOUT</Link>
                       </div>
                       <div className="col-sm-3">
                       <Link to ='/Profiles'>PROFILES</Link>
                       </div>
                       <div className="col-sm-3">
                       <Link to ='/Cont'>CONTACT</Link>
                       </div>

                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Nav;