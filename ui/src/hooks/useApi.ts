export const useApi = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_HOST;

  const compose = (path: string) => {
    return baseUrl + path;
  };

  return { compose };
};
