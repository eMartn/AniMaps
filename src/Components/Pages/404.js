import AniNav from '../../Components/AniNav';
import './404.css';
function doesNotExist()
{
   
    return(
        <div className = "notfound">
            <AniNav />

          
            <h1 className = "notfoundText" >
        Seems like you tried to reach outer space! This page does not exist.</h1>
        </div>
    )
}

export default doesNotExist;