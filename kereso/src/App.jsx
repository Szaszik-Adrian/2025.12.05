import React, { useState } from "react";


export default function SearchFilterApp() {
const [query, setQuery] = useState("");


// Példa adatok (helyben letárolva)
const data = [
"Alma",
"Banán",
"Körte",
"Narancs",
"Szőlő",
"Meggy",
"Dinnye",
"Ananász",
"Citrom",
];


const filteredData = data.filter((item) =>
item.toLowerCase().includes(query.toLowerCase())
);


return (
<div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 gap-6">
<h1 className="text-3xl font-bold mt-10">Keresőmező</h1>


<input
type="text"
placeholder="Keresés..."
value={query}
onChange={(e) => setQuery(e.target.value)}
className="border border-gray-400 rounded-xl p-3 w-72 text-lg shadow-sm"
/>


<ul className="bg-white p-6 rounded-xl shadow-md w-72 flex flex-col gap-2 text-lg">
{filteredData.length > 0 ? (
filteredData.map((item, idx) => (
<li key={idx} className="border-b last:border-none pb-1">
{item}
</li>
))
) : (
<li className="text-red-600">Nincs találat</li>
)}
</ul>
</div>
);
}