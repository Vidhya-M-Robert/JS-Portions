type Props = {
    name: string;
    role: string;
    age: number;
    skills:string[];
    isOnline: boolean;
}
export default function ProfileCard({name,role,age,skills,isOnline}: Props){
    return(
        <div className="w-80 p-6 rounded-xl shadow bg-white flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{name}</h2>
                <span className={`text-sm sont-medium px-2 py-1 rounded ${isOnline ? "bg-green-100 text-green-700":"bg-gray-100 text-gray-700"}`}>{isOnline ? "Online" : "Offline"}</span>
            </div>
           <p className="text-black">
            {role} . {age} years old
           </p>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">
                   {skill}</span>
                ))}

                 {skills.map((skill) => (
                    <span key={skill} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">{skill}</span>
                ))}
            </div>
        </div>
    )
}