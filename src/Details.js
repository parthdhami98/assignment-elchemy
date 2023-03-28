import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const Details = () => {
  //   const params = useParams();

  //   const ownerId = params.ownerId;
  //   const repoName = params.repo;

  const RepoDetails = JSON.parse(localStorage.getItem("repoDetails"));

  //   useEffect(() => {
  //     const fetchRepoDetails = async () => {
  //       try {
  //         let response = await fetch(
  //           `https://api.github.com/repos/${ownerId}/${repoName}`
  //         );

  //         let data = await response.json();

  //         console.log("data", data);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     };

  //     fetchRepoDetails();
  //   }, [ownerId, repoName]);

  if (RepoDetails) {
    return (
      <div>
        <p className="repoDetailsHeader">Repo details</p>

        <div className="listContainer">
          <p>Repository Name: {RepoDetails?.name}</p>
          <p>Repository Description: {RepoDetails?.description}</p>
          <p>Owner Login Name: {RepoDetails?.owner?.login}</p>
          <p>Language: {RepoDetails?.language}</p>
          <p>License: {RepoDetails?.license?.name}</p>
          <p>Forks: {RepoDetails?.forks}</p>
          <p>Watchers: {RepoDetails?.watchers}</p>
          <p>Organization URL: {RepoDetails?.url}</p>
          <p>Created Date: {RepoDetails?.created_at}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Details;
