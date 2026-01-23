export default function DashBoard(){
    return (
        <div className="min-h-screen bg-gray-300 p-8">
            <h1 className="text-3xl font-bold mb-3">DashBoard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-md shadow-md">Revenue</div>
        <div className="bg-white p-5 rounded-md shadow-md">Users</div>
        <div className="bg-white p-5 rounded-md shadow-md">Growth</div>
        <div className="bg-white p-5 rounded-md shadow-md">Orders</div>
        <div className="bg-white p-5 rounded-md shadow-md">Revenue</div>
        <div className="bg-white p-5 rounded-md shadow-md">Users</div>
        </div>
        </div>
    )
}