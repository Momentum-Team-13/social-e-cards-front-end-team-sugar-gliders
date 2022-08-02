function Follower(followers) {

    return (
        <div className="follower-card">
            <br /><h1>Username: {followers.followers.username}</h1>
            <h2>Email: {followers.followers.email}</h2><br />

        </div>
    )
}

export default Follower