import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./Home";
import Navbar from "./Navbar";
import ListComponent from "./ListComponent";


function App() {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts") // sample public API
       .then((response) => {
         if (!response.ok) throw new Error("API error");
         return response.json();
       })
       .then((data) => {
         setItems(data.slice(0, 10)); // limit to first 10 for demo
         setLoading(false);
       })
       .catch((err) => {
         setError(err.message);
         setLoading(false);
       });
   }, []);

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;


  return (
    <>
      <div>
        <Navbar />
        {/* <Home /> */}
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">📬 Posts</h1>
          {loading && <div className="text-blue-500 text-center">Loading...</div>}
          {error && <div className="text-red-500 text-center">Error: {error}</div>}
          {!loading && !error && (
            <ListComponent
              items={items}
              renderItem={(item) => (
                <li
                  key={item.id}
                  className="bg-white p-4 mb-2 rounded shadow hover:bg-gray-50 transition"
                >
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">{item.body}</p>
                </li>
              )} />
          )}
        </div>
        </div>
    </>
  );
}

export default App;
