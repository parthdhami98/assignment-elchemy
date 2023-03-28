import React from "react";
import "./App.css";

const MoreResults = () => {
  const repoList = JSON.parse(localStorage.getItem("moreResults"));

  return (
    <React.Fragment>
      <p className="repoDetailsHeader"> Top 10 results</p>
      <div className="listContainer">
        {repoList?.slice(0, 10).map((repo) => (
          <div key={repo.id} className="list">
            <p>Repository Name: {repo?.name}</p>
            <p className="repoDescription">
              Repository Description: {repo?.description}
            </p>
            <p>Owner Login Name: {repo?.owner?.login}</p>
            <p>Language: {repo?.language}</p>
            <p>Created Date: {repo?.created_at}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MoreResults;
