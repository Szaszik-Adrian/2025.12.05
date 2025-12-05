import { useState, useEffect } from 'react'
import './App.css'
 
function App() {
  const [data, setData] = useState([])
  const url ="https://retoolapi.dev/yEtUV8/data"
 
  const getData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json()
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  const postData = async () => {
    const newData = {
      "Lakohely": "Gomba",
      "Munkakor": "Tanulo",
      "TeljesNev": "Kala Pál"
    };
 
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      };
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Data posted successfully:', result);
      getData(); // Refresh data after posting
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
 
  const updateData = async (id) => {
    const updatedData = {
      "Lakohely": "Budapest,Timföld utca 99",
      "Munkakor": "Tanulo",
      "TeljesNev": "Gebefüginébélánéistvánné Károly Évike"
    };
 
    try {
      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      };
      const response = await fetch(`${url}/${id}`, config);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Data updated successfully:', result);
      getData(); // Refresh data after updating
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
 
 
  const deleteData = async (id) => {
    try {
      const config = {
        method: 'DELETE'
      };
      const response = await fetch(`${url}/${id}`, config);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Data deleted successfully:', result);
      getData(); // Refresh data after deleting
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
 
useEffect(() => {
    getData();
  }, []);
 
  return (
    <>
      <h1>CRUD with Fatch</h1>
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={() => updateData(12)}>Update Data</button>
      <button onClick={() => deleteData(12)}>Delete Data</button>
    </>
  )
}
 
export default App
 