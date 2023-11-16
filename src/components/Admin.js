import React, { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  addDoc,
} from 'firebase/firestore';
import './AdminComponent.css';
const AdminComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [sortsData, setSortsData] = useState([]);
  
  const [loading, setLoading] = useState(true); const handleLogin = async () => {
    try {
      const auth = getAuth();
      console.log('Logging in with email:', email);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      // If login is successful, set loggedIn state to true
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };   

  const fetchSortsData = async () => {
    
    const db = getFirestore();
    const sortsCollection = collection(db, 'Sorts');
    const sortsQuery = query(sortsCollection);


    try {
      const querySnapshot = await getDocs(sortsQuery);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        collectionId: 'Sorts',
        documentData: doc.data(),
      }));

      setSortsData(data);
      setLoading(false);
      console.log('Fetched Sorts data:', data);
    } catch (error) {
      
      console.error('Error getting Sorts data:', error);
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    Question: '',
    Options: [], // Initialize with one empty option
    Answer: '',
    Explanation: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Options') {
      const optionsCount = parseInt(value, 10);
      const newOptions = Array.from({ length: optionsCount }, (_, index) => {
        return formData.Options[index] || '';
      });

      setFormData({
        ...formData,
        Options: newOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [subcollectionId, setSubcollectionId] = useState('');

  const handleAddQuiz = async () => {
    if (selectedSort && subcollectionId) {
      const db = getFirestore();
      const sortDocumentRef = doc(db, 'Sorts', selectedSort);

      // Check if any required field is empty
      if (Object.values(formData).some((value) => !value)) {
        window.alert('Please fill in all required fields.');
        return;
      }

      // Set title based on the selected sort type and subcollection ID
      const Title = `${subcollectionId}`;

      try {
        // Set loading to true before adding the quiz
        setLoading(true);

        // Add a document to the subcollection with the specified ID (user-input subcollectionId)
        await addDoc(collection(sortDocumentRef, subcollectionId), {
          Title,
          ...formData,
        });

        // Prompt user with alert
        window.alert('Quiz added to the collection.');

        // Clear the form fields
        setFormData({
          Question: '',
          Options: [],
          Answer: '',
          Explanation: '',
        });

        // Clear the subcollection ID field
        setSubcollectionId('');

        // After adding the quiz, re-fetch the data
        await fetchSortsData();
      } catch (error) {
        console.error('Error adding quiz:', error);
      } finally {
        // Set loading back to false after adding the quiz
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (loggedIn) {
        
      fetchSortsData();
    }
  }, [loggedIn]);

  return (
    <div className="admin-component-container" >
      <h1>Admin Page</h1>
      {!loggedIn ? (
        <>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="123@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Add Practice Quiz questions to the Database</h2>
          <label>Select a Sort Algorithm:</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="">Select</option>
            {sortsData.map((sort) => (
              <option key={sort.id} value={sort.id}>
                {sort.id}
              </option>
            ))}
          </select>

          <label>Quiz ID:</label>
          <input
            type="text"
            value={subcollectionId}
            placeholder="Enter quiz ID"
            onChange={(e) => setSubcollectionId(e.target.value)}
          />

            <h2>Enter Quiz Details:</h2>
          <label>Question:</label>
          <input
            type="text"
            name="Question"
            value={formData.Question}
            onChange={handleInputChange}
          />
          <br />

            <label>Number of Options:</label>
            <input
              type="number"
              name="Options"
              onChange={handleInputChange}
              min="1"
              max="10"
          />
          <br />
          <label>Insert Answer Options:</label>
          {Array.from({ length: formData.Options.length }, (_, index) => (
  <div key={index}>
    <label>{`Option ${String.fromCharCode(65 + index)}:`}</label>
    <input
      type="text"
      name={`Options[${index}]`}
      placeholder={`Enter Option ${String.fromCharCode(65 + index)}`}
      onChange={(e) => handleInputChange(e)}
    />
    <br />
  </div>
))}
          <label>Insert Answer:</label>
          <input
            type="text"
            name="Answer"
            value={formData.Answer}
            placeholder="Enter Answer"
            onChange={handleInputChange}
          />
          <br />
          <label>Explanation:</label>
          <input
            type="text"
            name="Explanation"
            placeholder="Explain the answer for clarification"
            value={formData.Explanation}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleAddQuiz}>Add Quiz</button>

          {loading ? (
            <p>Quiz added successfully</p>
          ) : (
            <p></p>
          )}
        </>
      )}
    </div>
  );
};

export default AdminComponent;