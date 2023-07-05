import { useIterator } from "./hooks";
import { RepositoryReadme } from "./RepositoryReadme";

export const RepoMenu = ({ repositories, login }: any) => {
  const [{ name }, previous, next] = useIterator(repositories);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
};
