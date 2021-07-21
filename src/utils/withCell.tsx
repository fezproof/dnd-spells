import { useQuery, UseQueryArgs, UseQueryResponse, UseQueryState } from 'urql';
import type { DocumentNode } from 'graphql';
import React, { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

export type DataObject = Record<string, unknown>;

export type CellFailureProps = FallbackProps;

export type CellEmptyProps<TData, TVariables> = Omit<
  UseQueryState<TData, TVariables>,
  'error' | 'fetching' | 'data'
>;

export type CellSuccessProps<TData, TVariables> = Omit<
  UseQueryState<TData, TVariables>,
  'error' | 'fetching'
> & { refresh: UseQueryResponse<TData, TVariables>[1]; variables: TVariables };

export type WithCellProps<TData, TVars> = {
  QUERY: DocumentNode;
  Success: FC<CellSuccessProps<TData, TVars>>;

  // Optional
  options?: (props: TVars) => Omit<UseQueryArgs<TVars, TData>, 'query'>;
  Loading?: FC<TVars>;
  Failure?: FC<CellFailureProps>;
  Empty?: FC<CellEmptyProps<TData, TVars>>;
  Container?: FC<TVars>;
};

const DefaultLoading: FC = () => <>Loading...</>;
const DefaultContainer: FC = ({ children }) => <>{children}</>;
const DefaultEmpty: FC = () => <>No data</>;
const DefaultError: FC<FallbackProps> = ({ resetErrorBoundary, error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

type CellLoaderProps<TData, TVars> = Omit<
  WithCellProps<TData, TVars>,
  'Failure' | 'Container'
> & {
  variables: TVars;
};

const CellLoader = <TData, TVars>({
  QUERY,
  Success,

  // Optional
  options = (variables) => ({
    variables: variables,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  }),
  Loading = DefaultLoading,
  Empty = DefaultEmpty,
  variables,
}: CellLoaderProps<TData, TVars>) => {
  const query = QUERY;
  const optionsResult = options(variables);

  const [{ error, fetching, data, ...queryRest }, refresh] = useQuery<
    TData,
    TVars
  >({
    query,
    ...optionsResult,
  });

  if (error) {
    throw error;
  }

  if (fetching) {
    return <Loading {...variables} />;
  }

  if (data) {
    return (
      <Success
        data={data}
        refresh={refresh}
        variables={variables}
        {...queryRest}
      />
    );
  }

  return <Empty {...queryRest} {...variables} />;
};

export const withCell = function <TData = DataObject, TVars = DataObject>({
  Container = DefaultContainer,
  Failure = DefaultError,
  ...rest
}: WithCellProps<TData, TVars>): FC<TVars> {
  const Cell: FC<TVars> = (variables) => {
    return (
      <Container {...variables}>
        <ErrorBoundary FallbackComponent={Failure}>
          <CellLoader {...rest} variables={variables} />
        </ErrorBoundary>
      </Container>
    );
  };
  return Cell;
};
