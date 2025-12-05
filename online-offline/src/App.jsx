import React, { useState, useEffect } from "react";


export default function OnlineStatusApp() {
const [isOnline, setIsOnline] = useState(navigator.onLine);


useEffect(() => {
const goOnline = () => setIsOnline(true);
const goOffline = () => setIsOnline(false);


window.addEventListener("online", goOnline);
window.addEventListener("offline", goOffline);


return () => {
window.removeEventListener("online", goOnline);
window.removeEventListener("offline", goOffline);
};
}, []);


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<div
className={`text-4xl font-bold p-6 rounded-2xl shadow-md ${
isOnline ? "text-green-600 bg-white" : "text-red-600 bg-white"
}`}
>
{isOnline ? "Online" : "Offline"}
</div>
</div>
);
}