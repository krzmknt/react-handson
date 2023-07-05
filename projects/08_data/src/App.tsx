import { useState, useEffect } from "react";
import { UserList } from "./UserList";
import { useFetch } from "./hooks";

interface IGitHubUser {
  login: string;
}

const loadJSON = (key: string) => key && JSON.parse(localStorage.getItem(key)!);
const saveJSON = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

const GitHubUser = ({ login }: IGitHubUser) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export const App = () => (
  <>
    <UserList />
    <GitHubUser login="krzmknt" />;
  </>
);
