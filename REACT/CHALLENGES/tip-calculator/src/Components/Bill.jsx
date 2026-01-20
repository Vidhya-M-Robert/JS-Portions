export default function Bill({bill,onsetBill}){
    return(
        <div>
            <label>How much was the bill ?</label>
            <input type="number" value={bill} onChange={(e)=>onsetBill(Number(e.target.value))} placeholder="Enter the bill amount" />
        </div>
    )
}