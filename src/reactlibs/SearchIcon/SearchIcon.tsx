import React from 'react';
import { Search } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            cursor: 'pointer',
        },
    }),
);



const SearchIcon = () => {

    const classes = useStyles();

    return (
            <Search classes={classes} />   
        );
}

export default SearchIcon;