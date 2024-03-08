export default function Friend ({friend}){
    const {name,email} = friend;
    return(
        <div className="box">
            <h5>Name : {name}</h5>
            <p>Email : {email}</p>
        </div>
    )
}