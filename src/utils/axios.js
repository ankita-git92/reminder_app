const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GET = async (url, params) => {
  try {
    const headers = await generateHeaders();

    const res = await axios.get(url, { headers });

    return res.data.data;
  } catch (error) {
    console.log(error);
    return { succes: false };
  }
};

export const POST = async (url, body) => {
  try {
    const headers = await generateHeaders();
    const res = await axios.post(url, body, { headers });

    return res.data;
  } catch (error) {
    console.log('error', error.response.status);
    // TODO: if status code is 401 then logout
    return { succes: false };
  }
};

export const PUT = async (url, body) => {
  try {
    const headers = await generateHeaders();

    const res = await axios.put(url, body, { headers });
    return res.data;
  } catch (error) {
    console.log('Error', error);
    return { succes: false };
  }
};

const generateHeaders = async () => {
  let headers = { 'Content-Type': 'application/json' };

  const token = await AsyncStorage.getItem('token');
  if (token) headers.Authorization = token;

  return headers;
};

export const uploadMedia = async (url, data) => {
  let headers = { 'Content-Type': `multipart/form-data` };

  const token = await AsyncStorage.getItem('token');
  if (token) headers.Authorization = token;

  const res = await axios.post(url, data, { headers });
  return res.data;
};
