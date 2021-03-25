import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { TOption, TTempOption } from 'src/store/commonTypes';
import { useStyles } from './styles';

type TProps = {
    value?: string;
    mapKey?: any;
    options: Array<TOption | TTempOption>;
    onChange: (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
}

const CustomDropDown: React.FC<TProps> = ({
    value,
    mapKey,
    options,
    onChange,
}) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.margin}>
            <Select
                id="demo-customized-select"
                labelId="demo-customized-select-label"
                onChange={onChange}
                value={value}
            >
                {
                    options.map((item) => (
                        // @ts-ignore
                      <MenuItem key={item[mapKey]} value={item[mapKey]} children={item[mapKey]} />
                    ),
                    )
                }
          </Select>
      </FormControl>
    );
};

export default CustomDropDown;
