import 'bulma/css/bulma.min.css';

function Follower(followers) {
    return (
        <div className="follower-card">
            <br /><h1>Username: {followers.followers.username}</h1>
        </div>
    )
}

export default Follower