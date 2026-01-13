function StatusBadge({isOnline}){
    return(
        <span>
            {isOnline ? "Online" : "Offline"}
        </span>
    );
}
export default StatusBadge