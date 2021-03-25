import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '85%',
            height: '90%',
            margin: '15px',
            padding: theme.spacing(1),
        },
        media: {
            height: 250,
            objectFit : 'contain',
        },
    }),
);