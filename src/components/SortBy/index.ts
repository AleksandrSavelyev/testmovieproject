import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SortBy from './SortBy';
import * as actions from 'src/store/movie/action';
import { IMovies } from 'src/store/movie/reducer';
import * as selectors from 'src/store/movie/selectors';
import { TDiscoverPayload } from 'src/store/movie/types';

const mapStateToProps = (state: IMovies) => ({
    sortBy: selectors.getSortBy(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendFilterInfo: (payload: TDiscoverPayload) => dispatch(actions.sendFilterInfo(payload)),
    setSortByToStore: (payload: string) => dispatch(actions.setSortByToStore(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SortBy);