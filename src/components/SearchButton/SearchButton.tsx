import * as React from 'react'
import SearchIcon from 'src/reactlibs/SearchIcon/SearchIcon';
import FilterByName from 'src/reactlibs/CustomInput/CustomInput';
import { SearchButton, Wrapper__Search_Button } from './styled';

export type TProps = {
    isPressedSearchButton: boolean;
    setOnPressed: () => void;
};

const searcButton: React.FC<TProps> = ({ isPressedSearchButton, setOnPressed }) => {

    const handleClick = () => {
        setOnPressed();
    }

    return (
        <Wrapper__Search_Button>
        {isPressedSearchButton? (
                <FilterByName/>
            ) : (
            <SearchButton onClick={handleClick}>
                <SearchIcon/>
            </SearchButton>
            )
        }
        </Wrapper__Search_Button>
    )
};

export default searcButton;

