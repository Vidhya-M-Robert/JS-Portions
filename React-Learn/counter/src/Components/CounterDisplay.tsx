type Props={
    count: number;
};

export default function CounterDisplay({count}: Props){
    return(
        <h1 className="text-4xl font-bold text-blue-600">Count: {count}</h1>
    );
}