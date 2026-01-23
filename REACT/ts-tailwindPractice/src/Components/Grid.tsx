export default function Grid(){
    return (
        <div className="min-h-screen p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">First</div>
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">Second</div>
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">3rd</div>
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">4th</div>
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">5th</div>
            <div className="bg-gray-400 p-6 shadow-md rounded-lg">6th</div>
            </div>
        </div>
    )
}