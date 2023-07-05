import { Fetch } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export const UserRepositories = ({ login, onSelect = (f: any) => f }: any) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }: any) => (
        <RepoMenu repositories={data} login={login} />
      )}
    />
  );
};
