export default function UserProfile(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.role}</p>
            <p>{props.avatar}</p>
        </div>
    )
}
// Props Destructuring
// Refactor UserProfile to use destructuring in function parameters.

// export function UserProfile({name, role, avatar}){
//     return (
//         <div>
//             <img src={avatar} alt={name}/>
//             <h2>{name}</h2>
//             <p>{role}</p>
//         </div>
//     );
// }

