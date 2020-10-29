import request from 'api/request';

function useCrud(url, { authorized = true }) {
  const [data, setData] = useState([]);
  const api = authorized ? request.authorized() : request.unauthorized();

  const get = async (query) => {
    const queryString = Object.entries(query).map(([param, value]) => (
      `${param}=${JSON.stringify(value)}`
    )).join('&');

    const res = await api.get(`${url}${queryString ? `?${queryString}` : ''}`);
    setData(res.data);
    return res;
  };

  const create = async (body) => {
    const res = await api.post(url, body);
    setData((prevData) => [...prevData, res.data]);
  };

  const getOne = (id) => api.get(`${url}/${id}`);

  const remove = async (id) => {
    await api.delete(`${url}/${id}`);
    setData((prevData) => prevData.filter((item) => (
      item.id !== id
    )));
  };

  const edit = async (id, body) => {
    const res = await api.patch(`${url}/${id}`, body);
    setData((prevData) => prevData.map((item) => {
      if (item.id === id) {
        return res.data;
      }
      return item;
    }))
  };

  return {
    data,
    get,
    create,
    getOne,
    remove,
    edit,
  };
}

export default useCrud;