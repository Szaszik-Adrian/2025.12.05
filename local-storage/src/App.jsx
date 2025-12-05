import React, { useState, useEffect } from "react";


export default function LocalStorageSaver() {
const [value, setValue] = useState("");


// Betöltjük az elmentett adatot a localStorage-ból
useEffect(() => {
const saved = localStorage.getItem("savedInput");
if (saved) setValue(saved);
}, []);


// Adat mentése a localStorage-ba
const saveToLocalStorage = () => {
localStorage.setItem("savedInput", value);
};


return (
<div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 p-4">
<input
type="text"
value={value}
onChange={(e) => setValue(e.target.value)}
placeholder="Írd be az adatot..."
className="border border-gray-400 rounded-xl p-3 w-64 text-lg"
/>


<button
onClick={saveToLocalStorage}
className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
>
Mentés localStorage-ba
</button>
</div>
);
}