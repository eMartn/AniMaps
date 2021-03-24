import AniNav from '../../Components/AniNav';

function doesNotExist()
{
   
    return(
        <div>
            <AniNav />
            <h1 style={{textAlign: 'center'}}>Seems like you tried to reach outer space! This page does not exist.</h1>
        </div>
    )
}

export default doesNotExist;