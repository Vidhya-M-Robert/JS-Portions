export default function Modal({isOpen, children}){
    if(!isOpen) return null;
    return(
        <div style={{position:"fixed",top: 0, left:0,backgroundColor:"rgba(0,0,0,0.5", width: "100%",
    height: "100%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000}}>
            <div style={{backgroundColor: "#fff",padding: "24px",borderRadius: "8px",maxWidth: "500px",width: "90%",boxShadow: "0 4px 12px rgba(0,0,0,0.3)"}}>
                {children}
            </div>
        </div>
    )
}