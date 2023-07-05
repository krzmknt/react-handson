import { useFetch } from "./hooks";

interface IGitHubUser {
  login: string;
}

export const GitHubUser = ({ login }: IGitHubUser) => {
  const { loading, data, error }: any = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>Loading...</h1>;

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
