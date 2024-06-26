import List from "./List";
import Search from "./Search";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
  };

const App = ()=> {  
  
  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
];

// const [searchTerm, setSearchTerm] = useStorageState('search','React'); 

const [searchTerm, setSearchTerm] = useStorageState('search','React');
const [stories, setStories] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // console.log(stories);
    };

  const searchedStories = stories.filter(function (story) {
      return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const getAsyncStories = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ data: { stories: initialStories } }),2000));

  // useEffect(() => {
  //     localStorage.setItem('search', searchTerm);

  //   }, [searchTerm]);

    
  useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    });
  }, []);


  return (    
    <div>
      <Navbar />
      <h1>My Hacker Stories</h1>

      <Search  search={searchTerm} onSearch={handleSearch} />
      <hr />
      {isLoading ? <p>Loading...</p>:(<List list = {searchedStories} />)}
      
      
      {/* <List list = {searchedStories} /> */}
    </div>
  )
}

export default App
