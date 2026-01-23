export default function Nav(){
    return(
        // <div className="flex items-center justify-between p-4 bg-gray-800 text white">
        //     <h1 className="font-bold text-xl text-white">MyApp</h1>
        //     <div className="flex gap-4 text-white">
        //         <a>Home</a>
        //         <a>About</a>
        //         <a>Contact</a>
        //     </div>
        // </div>
        <nav className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="font-bold text-xl">MyApp</h1>
            <div className="flex gap-6">
            <a className="hover:text-gray-300 transition">Home</a>
            <a className="hover:text-gray-300 transition">About</a>
            <a className="hover:text-gray-300 transition">Contact</a>
            </div>
            <div className="grid grid-cols-3 gap-4"> 
                <div className="bg-gray-200 p-4">1</div>
                <div className="bg-gray-200 p-4">2</div>
                <div className="bg-gray-200 p-4">3</div>
            </div>
            </div>
        </nav>

    )
}