import * as React from 'react';
import CustomSlider from 'src/reactlibs/CustomSlider';
import { TFilter } from 'src/store/commonTypes';
import { TDiscoverPayload } from 'src/store/movie/types';

export type TProps = {
    sendFilterInfo: (value: TDiscoverPayload) => void;
    voteAverage: number;
};

const VoteAverage: React.FC<TProps> = ({ voteAverage, sendFilterInfo }) => {
    const handleChangeVote = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        const currentVote: keyof TFilter = value;
        sendFilterInfo({filter: 'vote_average.lte', value: currentVote})
    }

    return <CustomSlider value={voteAverage} onChange={handleChangeVote}/>
};

export default VoteAverage;