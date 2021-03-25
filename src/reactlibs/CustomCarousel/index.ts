import CustomCarousel from './CustomCarousel';
import { connect } from 'react-redux';
import * as selectors from 'src/store/movie/selectors';
import { IMovies } from 'src/store/movie/reducer';

const mapStateToProps = (state: IMovies) => ({
    movies: selectors.getMovies(state),
});

export default connect(mapStateToProps)(CustomCarousel);