import React from "react";
import { BrowserRouter } from "react-router-dom";

import GraphQLProvider from "graphql/provider";
import QueryParamsProvider from "queryParams/provider";
import ThemeProvider from "theme/provider";

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryParamsProvider>
        <GraphQLProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </GraphQLProvider>
      </QueryParamsProvider>
    </BrowserRouter>
  );
};

export default Providers;
