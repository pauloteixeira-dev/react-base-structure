import { useEffect } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { notifyError } from "../../services/alertApi";
import axiosApi from "../../services/axiosApi";

const InterceptorsWrapper = () => {
  const { setIsLoading } = useGlobalContext();
  useEffect(() => {
    const requestInterceptor = axiosApi.interceptors.request.use(
      (config) => {
        const configAsAny = config as any;
        if (!configAsAny.ignoreLoading) {
          setIsLoading(true);
        }
        return config;
      },
      (error) => {
        setIsLoading(false);
        notifyError();
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosApi.interceptors.response.use(
      (response) => {
        setIsLoading(false);
        return response;
      },
      (error: any) => {
        setIsLoading(false);
        notifyError(error.response?.data?.errorMessage);
        return Promise.reject(error);
      }
    );

    return () => {
      // Remove interceptors when the component is unmounted
      axiosApi.interceptors.request.eject(requestInterceptor);
      axiosApi.interceptors.response.eject(responseInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default InterceptorsWrapper;
