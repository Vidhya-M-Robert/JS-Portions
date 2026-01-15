import Dialogue from "./Dialogue";
export default function Cancel(){
    return(
        <div>
            <Dialogue title ="Cancel">
                <h1>Are you Sure ?</h1>
                <button>Yes</button>
                <button>No</button>
            </Dialogue>
        </div>
    );
}

