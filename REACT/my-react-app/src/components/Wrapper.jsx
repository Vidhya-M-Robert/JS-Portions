export default function Wrapper({isAuthenticated,children}){
    if(!isAuthenticated) return <h2>Access Denied</h2>
    return (
        <div>
           {children} 
        </div>
    )
}