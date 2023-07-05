import { Fetch } from "./Fetch";
import { UserRepositories } from "./UserRepositories";

interface IGitHubUser {
  login: string;
}

export const GitHubUser = ({ login }: IGitHubUser) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};

const UserDetails = ({ data }: any) => {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName: any) => console.log(`${repoName} selected`)}
      />
    </div>
  );
};
