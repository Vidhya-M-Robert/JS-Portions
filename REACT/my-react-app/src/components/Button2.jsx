import './Button2.css'
export default function Button2({variant,children}){
    return (
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    )
}

// React builds class names
// HTML carries them
// CSS matches them
// Browser merges them