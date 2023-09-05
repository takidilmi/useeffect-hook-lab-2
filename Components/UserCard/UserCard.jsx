export default function UserCard({name, user, avatar}) {
  return (
    <div className="user-card">
      <div>
        <img alt="avatar" src={avatar}/>
      </div>
      <div>
        <h5> Name:{name}</h5>

        <p> Username: {user}</p>
      </div>
    </div>
  );
}