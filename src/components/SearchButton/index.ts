import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import SerachButton from './SearchButton';
import * as actions from 'src/store/movie/action';
import { getPressed } from 'src/store/movie/selectors';
import { IMovies } from 'src/store/movie/reducer';

const mapStateToProps = (state: IMovies) => ({
    isPressedSearchButton: getPressed(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setOnPressed: () => dispatch(actions.setOnPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(SerachButton);