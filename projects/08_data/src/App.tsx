import { GitHubUser } from "./GitHubUser";
import { UserList } from "./UserList";

export const App = () => (
  <>
    <UserList />
    <GitHubUser login="krzmknt" />
  </>
);
