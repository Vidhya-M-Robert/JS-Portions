import ProfileCard from "./Components/ProfileCard"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center gap-6 flex-wrap">
      <ProfileCard name="Harry" role="Developer" age={21} skills={["react", "typescript","Tailwind","javaScript"]} isOnline={false}/>
      <ProfileCard name="Harry" role="Developer" age={21} skills={["react", "typescript","Tailwind"]} isOnline={true}/>
      <ProfileCard name="Harry" role="Developer" age={21} skills={["react", "typescript","Tailwind"]} isOnline={false}/>

    </div>
  )
}

export default App
