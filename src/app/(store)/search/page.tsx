const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query } = await searchParams;
  return <div>Search params {query}</div>;
};

export default SearchPage;
