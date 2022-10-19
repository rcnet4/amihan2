/**
 * Http abstraction
 * To encapsulate http provider details like FETCH Api or Axios.
 * Provider: Axios
 */
import axios from "axios";
import Config from "./../config";

const Http = () => {
  let api = axios.create({ baseURL: Config.authUrl });

  // ===============
  // Methods
  // ===============
  /**
   *
   * @param {resourcePathName} Resource path name for example 'user'
   * @param {cfg} you can use params - An object parameter { ID: 12345 }
   */
  const get = (resourcePathName, cfg = null) =>
    cfg ? api.get(resourcePathName, cfg) : api.get(resourcePathName);

  const post = (resourcePathName, payload, cfg = null) =>
    cfg
      ? api.post(resourcePathName, payload, cfg)
      : api.post(resourcePathName, payload);

  const del = (urlParams) => api.delete(urlParams);

  const put = (urlParams, payload, cfg = null) =>
    cfg ? api.put(urlParams, payload, cfg) : api.put(urlParams, payload);

  const patch = (resourcePathName, payload) =>
    api.patch(resourcePathName, payload);

  /**
   * Will return the specific provider (actual library)
   * Note: Avoid using this!
   */
  const getProvider = () => api;

  return {
    get,
    post,
    put,
    delete: del,
    patch,
    getProvider,
  };
};

export default Http;
