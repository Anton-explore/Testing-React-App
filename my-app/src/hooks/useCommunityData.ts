import { useCallback, useEffect, useState, useMemo } from "react";

const SERVER_URL = 'http://localhost:3000'

export type CommunityProps = {
  avatar: string; 
  firstName: string;
  id: string;
  lastName: string;
  position: string;
}

export type SubscribeResponseProps = {
  success: boolean
}

export const useCommunityData = () => {
  const [data, setData] = useState<CommunityProps[] | null>(null)
  const controller = useMemo(() => (new AbortController()), []);
  const signal = controller.signal;

  const fetchData= useCallback(async() => {
    const res = await fetch(`${SERVER_URL}/community`, { signal });
    const nextRes = await res.json() as CommunityProps[];
    return setData(nextRes);
  }, [signal])

  useEffect(() => {
      fetchData();
    
    return () => {
      controller.abort();
    }
  }, [controller, fetchData])

  return {
    data,
  }
}

export const useSubscribeFetch = () => {

  const subscribe = async (email: string) => {
    const body = JSON.stringify({ email })
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body, 
    }

    const res = await fetch(`${SERVER_URL}/subscribe`, requestOptions);
    if (res.status === 422) {
      throw new Error(`${res.status} - Email is already in use`);
    }
    const nextRes = await res.json() as SubscribeResponseProps;
    return nextRes
  }


  return {
    subscribe,
  }
}

export const useUnSubscribeFetch = () => {

  const unSubscribe = async (email: string) => {
    const body = JSON.stringify({ email })
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body, 
    }

    const res = await fetch(`${SERVER_URL}/unsubscribe`, requestOptions);
    const nextRes = await res.json() as SubscribeResponseProps;
    return nextRes
  }


  return {
    unSubscribe,
  }
}
