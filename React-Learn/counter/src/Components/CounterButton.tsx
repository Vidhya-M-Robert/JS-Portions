type Props = {
    count: number,
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>;
    onIncrease: () => void;        //This prop must be a function that takes no arguments and returns nothing
    onDecrease: () => void;
    onReset: () => void;
}
export function CounterButton({count,step,setStep,onIncrease,onDecrease,onReset}: Props){
    return(
        <>
        <div className="flex flex-col gap-4 items-center">
            <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className="border px-3 py-1 rounded w-24 text-center"/>
        </div>
        <div className="flex gap-4">
        <button onClick={onIncrease} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">+ {step}
        </button>
        <button onClick={onDecrease} disabled={count === 0} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed">-{step}
        </button>
        <button onClick={onReset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">Reset
        </button>

       </div> 
        </>
    )
}