import React, { useState } from "react";
// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from "@/firebase/firebase";

import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);

  // const [inputs, setInputs] = useState({
  //   id: "",
  //   title: "",
  //   difficulty: "",
  //   category: "",
  //   order: 0,
  //   videoId: "",
  //   link: "",
  //   likes: 0,
  //   dislikes: 0,
  // });

  // const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...inputs,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

  // const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   // Convert inputs.order into an integer
  //   const newProblem = {
  //     ...inputs,
  //     order: Number(inputs.order),
  //   };
  //   await setDoc(doc(firestore, "problems", inputs.id), newProblem);
  //   alert("Save to DB");
  // };

  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
          &ldquo; Innovate, Solve, Execute &rdquo; 💡
        </h1>
        <div className="relative overflow-x-auto mx-auto px-2 pb-10">
          {loadingProblems && (
            <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
              {[...Array(20)].map((_, idx) => (
                <LoadingSkeleton key={idx} />
              ))}
            </div>
          )}
          {/* Problems Table */}
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            {!loadingProblems && (
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
                <tr>
                  <th className="px-1 py-3 w-0 font-medium" scope="col">
                    Status
                  </th>
                  <th className="px-6 py-3 w-0 font-medium" scope="col">
                    Title
                  </th>
                  <th className="px-6 py-3 w-0 font-medium" scope="col">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 w-0 font-medium" scope="col">
                    Category
                  </th>
                  <th className="px-6 py-3 w-0 font-medium" scope="col">
                    Solution
                  </th>
                </tr>
              </thead>
            )}
            {/* <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
              <tr>
                <th className="px-1 py-3 w-0 font-medium" scope="col">
                  Status
                </th>
                <th className="px-6 py-3 w-0 font-medium" scope="col">
                  Title
                </th>
                <th className="px-6 py-3 w-0 font-medium" scope="col">
                  Difficulty
                </th>
                <th className="px-6 py-3 w-0 font-medium" scope="col">
                  Category
                </th>
                <th className="px-6 py-3 w-0 font-medium" scope="col">
                  Solution
                </th>
              </tr>
            </thead> */}
            <ProblemsTable setLoadingProblems={setLoadingProblems} />
          </table>
        </div>

        {/* Temporary Form */}
        {/* <form
          className="flex flex-col gap-3 max-w-sm p-6"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="problem id"
            name="id"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="title"
            name="title"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="difficulty"
            name="difficulty"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="category"
            name="category"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="order"
            name="order"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="videoId?"
            name="videoId"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="link?"
            name="link"
          />
          <button className="bg-white">Save to DB</button>
        </form> */}
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 rounded-full shrink-0 bg-dark-layer-1"></div>
      <div className="w-32 h-4 sm:w-52 rounded-full bg-dark-layer-1"></div>
      <div className="w-32 h-4 sm:w-52 rounded-full bg-dark-layer-1"></div>
      <div className="w-32 h-4 sm:w-52 rounded-full bg-dark-layer-1"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
