import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
 
function App() {
  const [data, setData] = useState([]);
 
  const url = "https://retoolapi.dev/yEtUV8/data";
 
  useEffect(() => {
    getData();
  }, []);
 
  // GET
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
 
  // POST
  const postData = async () => {
    const newData = {
      Lakohely: "Agartha",
      Munkakor: "Kocsmás",
      TeljesNev: "Nagy Laci",
    };
 
    try {
      const response = await axios.post(url, newData);
      console.log("Data posted:", response.data);
      getData();
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };
 
  // PUT (teljes módosítás)
  const putData = async (id) => {
    const updated = {
      Lakohely: "Agartha",
      Munkakor: "Kocsmás",
      TeljesNev: "Nagy Laci",
    };
 
    try {
      const response = await axios.put(`${url}/${id}`, updated);
      console.log("Data updated (PUT):", response.data);
      getData();
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };
 
  // PATCH (részleges módosítás)
  const updateData = async (id) => {
    const updated = {
      Munkakor: "Sámán",
    };
 
    try {
      const response = await axios.patch(`${url}/${id}`, updated);
      console.log("Data updated (PATCH):", response.data);
      getData();
    } catch (error) {
      console.error("Error patching data:", error.message);
    }
  };
 
  // DELETE
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log("Data deleted:", response.data);
      getData();
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
 
  return (
    <>
      <h1>CRUD axios</h1>
 
      <button onClick={getData}>Get data</button>
      <button onClick={postData}>Post data</button>
      <button onClick={() => putData(5)}>Put data </button>
      <button onClick={() => updateData(5)}>Patch data </button>
      <button onClick={() => deleteData(20)}>Delete data </button>
 
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
 
export default App;