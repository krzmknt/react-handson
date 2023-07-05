import { useFetch } from "./hooks";

export const Fetch = ({
  uri,
  renderSuccess,
  loadingFallback = <p>Loading</p>,
  renderError = (error: any) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: any) => {
  const { loading, data, error } = useFetch(uri);
  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess({ data });
};
