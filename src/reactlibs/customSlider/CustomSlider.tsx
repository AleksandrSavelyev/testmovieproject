import React from 'react';
import Slider from '@material-ui/core/Slider';
import useStyles from './style';

type TProp = {
    onChange?: ((event: React.ChangeEvent<{}>, value: (number | number[])) => void);
    value: number | number[];
}

const defaultStyle = {
    defaultValue: 10,
    step: 1,
    min: 0,
    max: 10
}

const valuetext = (value: number) => {
    return `${value}`;
}

const CustomSlider = ({ onChange, value }: TProp) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={defaultStyle.defaultValue}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={defaultStyle.step}
                value={value}
                marks
                onChangeCommitted={onChange}
                min={defaultStyle.min}
                max={defaultStyle.max}
            />
        </div>
    );
}

export default CustomSlider;