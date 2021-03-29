import MovieHeader from './MovieHeader';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as selectors from 'src/store/movie/selectors';
import { IMovies } from 'src/store/movie/reducer';
import * as actions from 'src/store/movie/action';

const mapStateToProps = (state: IMovies) => ({
    movieInfo: selectors.getMovieInfo(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);