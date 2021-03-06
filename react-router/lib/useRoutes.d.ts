import * as H from 'history';
import { HistoryRoutes } from './History';

declare function useRoutes<T>(createHistory: H.CreateHistory<T>): H.CreateHistory<T & HistoryRoutes>;
export default useRoutes;
