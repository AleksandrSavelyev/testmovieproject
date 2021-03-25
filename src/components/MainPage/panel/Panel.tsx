import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Wrapper,
    WrapperVote,
    WrapperFilter,
    WrapperLanguage,
    VoteTranslation,
    WrapperDataPicker,
    WrapperSortByName,
    FilterTranslation,
} from './style';
import SortBy from 'src/components/SortBy';
import DatePicker from 'src/reactlibs/DatePicker';
import VoteAverage from 'src/components/VoteAverage';
import FilterByName from 'src/components/FilterByName';
import LanguageDropDown from 'src/components/LanguageDropDown';

const Panel = () => {
    const { t } = useTranslation();
    return (
        <Wrapper data-at='wrapper'>
            <WrapperVote data-at='wrapper_wrapper-vote'>
                <VoteTranslation>
                    {t('Vote Average')}
                </VoteTranslation>
                <VoteAverage data-at='wrapper-vote_vote-average'/>
            </WrapperVote>
            <WrapperSortByName data-at='wrapper_wrapper-sort-by-name'>
                <FilterByName data-at='wrapper-sort-by-name_filter-by-name'/>
            </WrapperSortByName>
            <WrapperLanguage data-at='wrapper_wrapper-language'>
                <LanguageDropDown data-at='wrapper-language_language-drop-down'/>
            </WrapperLanguage>
            <WrapperFilter data-at='wrapper_wrapper-filter'>
                <FilterTranslation>
                    {t('Sort By')}
                </FilterTranslation>
                <SortBy data-at='wrapper-filter_sort-by'/>
            </WrapperFilter>
            <WrapperDataPicker data-at='wrapper_wrapper-data-picker'>
                <DatePicker data-at='wrapper-data-picker_date-picker'/>
            </WrapperDataPicker>
        </Wrapper>
    )
}

export default Panel;