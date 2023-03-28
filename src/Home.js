import React, { useEffect, useState } from "react";
import useDebounceHook from "./useDebounceHook";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [dropdownList, setDropdownList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = useDebounceHook(searchInput, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.github.com/search/repositories?q={${search}}{&page,per_page,sort,order}`
        );

        let data = await response.json();

        setDropdownList(data.items);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleRepoDetails = (details) => {
    localStorage.setItem("repoDetails", JSON.stringify(details));

    navigate(`/Details/${details.owner.id}/${details.name}`);
  };

  return (
    <div>
      <div className="searchBox">
        <input
          placeholder="Search"
          className="inputBox"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              localStorage.setItem("moreResults", JSON.stringify(dropdownList));
              navigate("/moreResults");
            }
          }}
        />
      </div>
      <div className="listContainer">
        {isLoading ? (
          <div className="loader">Loading......</div>
        ) : (
          dropdownList?.slice(0, 5).map((details) => (
            <div
              key={details.id}
              className="list"
              onClick={() => handleRepoDetails(details)}
            >
              <div className="repoName">Repo Name: {details.full_name}</div>
              <div className="repoDescription">
                Repo Description: {details.description}
              </div>
              <div>Owner Name: {details.name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
