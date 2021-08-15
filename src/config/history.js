import { createBrowserHistory } from 'history';

const contextPath = '/';

const history = createBrowserHistory({
  basename: contextPath
});

export default history;
