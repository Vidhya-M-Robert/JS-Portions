import axios from "axios";
import { useEffect, useState } from "react"
// import Search from "./Search";
import Display from "./Display";



interface Article{
    source: {
        id: string | null;
        name: string;
    };
    url: string;
    title: string | null;
    description: string | null;
    publishedAt: string;
}


export default function News(){
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const[error,setError] = useState<string>("");

    const API_KEY = import.meta.env.VITE_API_KEY as string;
    const fetchNews = async (keyword: string = "cars AND technology AND sports"): Promise<void>=>{
        setLoading(true);
        setError("");
       try{
        const res =await axios.get<{articles: Article[]}>(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`);
        if(res.data.articles.length === 0){
            setError("No articles found");
        }
        setArticles(res.data.articles);
       }
       catch(err){
        console.log("Error",err)
        setError("Failed to fetch news");
       }
       finally{
        setLoading(false)
       }
    };

    useEffect(() => {
        fetchNews();
    },[])

    
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600 mt-5 underline underline-offset-8 bg-white">NewsExplorer</h1>
         {/* <Search onSearch={fetchNews}/> */}
         <div className="grid grid-cols-1 sm:grid-colos-3 gap-6 mt-6">
            {loading && <p className="text-center">Loading News...</p>}
            {error && <p className="text-center">{error}</p>}
            {!loading && !error && articles.length >0 && articles.map((article) => (
                <Display key={article.url} article={article} />
            ))}
         </div>
        </div>
    )
}