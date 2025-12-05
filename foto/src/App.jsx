import React, { useEffect, useState } from "react";


export default function UserCardsApp() {
const [users, setUsers] = useState([]);


// Adatok lekérése az API-ból
useEffect(() => {
fetch("https://randomuser.me/api/?results=10")
.then((res) => res.json())
.then((data) => {
// Minden user mellé adunk egy szavazat mezőt
const withVotes = data.results.map((user) => ({
...user,
votes: 0,
}));
setUsers(withVotes);
});
}, []);


const handleVote = (index, amount) => {
setUsers((prev) => {
const updated = [...prev];
updated[index] = { ...updated[index], votes: updated[index].votes + amount };
return updated;
});
};


return (
<div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 p-6 justify-center">
{users.map((user, index) => (
<div
key={index}
className="bg-white shadow-md rounded-2xl p-4 w-64 flex flex-col items-center"
>
<img
src={user.picture.large}
alt={"user image"}
className="rounded-full w-24 h-24 border mb-4"
/>


<h2 className="text-xl font-semibold text-center mb-2">
{user.name.first} {user.name.last}
</h2>


<p className="text-lg font-bold mb-4">Szavazat: {user.votes}</p>


<div className="flex gap-4">
<button
onClick={() => handleVote(index, 1)}
className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
>
Like
</button>


<button
onClick={() => handleVote(index, -1)}
className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
>
Dislike
</button>
</div>
</div>
))}
</div>
);
}