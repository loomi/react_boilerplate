import {
  useState, useEffect, useCallback, useMemo,
} from 'react';

// TODO: refact effect deps

/**
 * Use infinity request hook
 * @param {import('axios').AxiosPromise} request the request api
 * @param {Object} resource the api resource
 * @param {Object} options the request options
 */
function useRequestInfinity(resource, { filters = {} }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState(0);

  if (!('get' in resource && 'count' in resource)) {
    throw new Error('Invalid resource object. Should have get and count methods.');
  }

  useEffect(() => {
    (async () => {
      const { data: response } = await resource.count({
        where: filters?.where,
      });

      setCount(response?.count || 0);
    })();
  }, []);

  const loadMore = useCallback(
    async (page = 1) => {
      setHasMore(false);

      try {
        setError(null);
        setLoading(true);

        const skip = (page - 1) * filters.limit;

        const response = await resource.get({
          filters: { ...filters, skip },
        });

        setData(response.data);
        return response;
      } catch (err) {
        setData(null);
        setError(err);
        return Promise.reject(err);
      } finally {
        setLoading(false);
      }
    },
    [resource],
  );

  useEffect(() => {
    if (count > 0) { loadMore(); }
  }, [count]);

  return useMemo(
    () => [data, {
      loading, error, hasMore, loadMore,
    }],
    [data, loading, error, hasMore, loadMore],
  );
}

export default useRequestInfinity;
