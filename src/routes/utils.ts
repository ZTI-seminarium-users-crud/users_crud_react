import { To } from "@remix-run/router";
import { NavigateOptions } from "react-router/dist/lib/context";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateAndKeepSearchParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (to: To, options?: NavigateOptions) => {
    if (typeof to === "string") {
      return navigate({ pathname: to, search: location.search }, options);
    }

    return navigate({ search: location.search, ...to }, options);
  };
};
