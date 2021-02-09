import { useState, useEffect } from "react";
import API from './../api'

export const usePost = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const execute = async (url, obj) => {
    try {
      setData(await API.post(url, obj));
    } catch (e) {
      setError(true);
    }
  };
  return [data, error, execute];
};

export const useGet = ({ url, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const get = async () => {
      try {
        const res = await API.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    get();
  }, [url]);

  return [data, isLoading, error];
};

export const usePut = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const executePut = async (url, obj) => {
    try {
      setData(await API.put(url, obj));
    } catch (e) {
      setError(true);
    }
  };
  return [data, error, executePut];
};

export const useDelete = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const eliminate = async (url) => {
    try {
      const res = await API.delete(url);
      setLoading(false);
      setData(res);
    } catch (e) {
      setError(true);
    }
  };
  return [data, error, eliminate];
};
