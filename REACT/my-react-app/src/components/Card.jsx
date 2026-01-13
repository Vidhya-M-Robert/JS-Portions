export default function Card({title,children}){
    return (
        <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "16px auto"
    }}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

// What React sees(BTS)

// Card({
//     title: "BMW",
//     children: (
//         <>
//         <h1>Bayerische Motoren Werke</h1>
//         <p>BMW AG is a multi...</p>
//         </>
//     )
// })