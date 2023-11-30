import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
      console.log(output.data);
    } catch (error) {
      toast.error("API call failed");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category = {category} setCategory = {setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          <Cards courses={courses} category = {category}></Cards>
        </div>
      </div>
    </div>
  );
};

export default App;
