import * as React from "react";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

type Props = {
  children: React.ReactNode;
};

const QueryParamsProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryParamProvider
      adapter={ReactRouter6Adapter}
      options={{
        updateType: "replaceIn",
      }}
    >
      {children}
    </QueryParamProvider>
  );
};

export default QueryParamsProvider;
