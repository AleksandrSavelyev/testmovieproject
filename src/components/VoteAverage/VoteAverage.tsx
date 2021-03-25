import * as React from 'react';
// @ts-ignor
import CustomSlider from 'src/reactlibs/customSlider';
import { TFilter } from 'src/store/commonTypes';
import { TDiscoverPayload } from 'src/store/movie/types';

export type TProps = {
    sendFilterInfo: (value: TDiscoverPayload) => void;
    voteAverage: number;
};

const VoteAverage: React.FC<TProps> = ({ voteAverage, sendFilterInfo }) => {
    // @ts-ignore
    const handleChangeVote = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        // @ts-ignore
        const currentVote: keyof TFilter = value;
        sendFilterInfo({filter: 'vote_average.lte', value: currentVote})
    }

    return <CustomSlider value={voteAverage} onChange={handleChangeVote}/>
};

export default VoteAverage;