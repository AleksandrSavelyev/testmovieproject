import styled from 'styled-components';

interface ICTypes  {
    direction?: string
}

export const Wrapper = styled('div')<ICTypes>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperVote = styled('div')<ICTypes>`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperSortByName = styled('div')<ICTypes>`
  width: 10%;
  height: 100%;
  margin-top: 20px;
`;

export const WrapperLanguage = styled('div')<ICTypes>`
  width: 10%;
  height: 100%;
  margin-top: 20px;
`;

export const WrapperFilter = styled('div')<ICTypes>`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperDataPicker = styled('div')<ICTypes>`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const VoteTranslation = styled('span')<ICTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterTranslation = styled('span')<ICTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageTranslation = styled('span')<ICTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DatePickerTranslation = styled('span')<ICTypes>``;