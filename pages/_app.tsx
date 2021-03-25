import { wrapper } from 'src/store';

const App = ({ Component, pageProps }: any) => <Component {...pageProps} />

export default wrapper.withRedux(App);