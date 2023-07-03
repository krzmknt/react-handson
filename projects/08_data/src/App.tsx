import { useState, useEffect } from "react";

interface IGitHubUser {
  login: string;
}

const loadJSON = (key: string) => key && JSON.parse(localStorage.getItem(key)!);
const saveJSON = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

const GitHubUser = ({ login }: IGitHubUser) => {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(console.log)
      .then(() => setLoading(false))
      .catch(console.error);
  }, [login]);

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

export const App = () => <GitHubUser login="krzmknt" />;
