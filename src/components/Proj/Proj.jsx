import './proj.css'

const Proj = ({url,color}) => {
    return ( 
        <div className="p" style={{borderColor : color}}>
            <div className="p-browser" style={{backgroundColor : color}}>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>

            
                  <img src={url} alt="proj" />
        </div>
     );
}
 
export default Proj;