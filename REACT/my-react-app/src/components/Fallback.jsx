export default function FallBack({errorMsg, children}){
    if(errorMsg){
        return <p>{errorMsg}</p>
    }
    return <>{children}</>
}