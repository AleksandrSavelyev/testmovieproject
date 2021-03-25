import CustomDropDown from 'src/reactlibs/CustomDropDown';
import React, { FC } from 'react';
import { TFilter } from 'src/store/commonTypes';
import { TDiscoverPayload } from 'src/store/movie/types';
import { arrSort, discoverKeys } from 'src/constants/arrSort';

export type TProps = {
    sortBy: string;
    sendFilterInfo: (value: TDiscoverPayload) => void;
    setSortByToStore: (value: string) => void;
};

const SortBy: FC<TProps> = ({ sortBy, sendFilterInfo, setSortByToStore }) => {
    const handleChangeSort = (event: React.ChangeEvent<{name?: string | undefined; value: unknown; }>) => {
        const currentSort: keyof TFilter | string = (event.target as HTMLSelectElement ).value;
        sendFilterInfo({ filter: 'sort_by', value: discoverKeys[currentSort] });
        setSortByToStore(currentSort);
    }

    return <CustomDropDown 
        value={sortBy} 
        mapKey='title' 
        options={arrSort} 
        onChange={handleChangeSort}
        />
};

export default SortBy;