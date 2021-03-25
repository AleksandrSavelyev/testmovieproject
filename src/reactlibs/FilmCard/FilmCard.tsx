import React from 'react';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import {useTranslation} from "react-i18next";

export type TProps = {
    alt?: string,
    title?: string,
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error',
    width?: number,
    image?: string,
    genre?: string,
    height?: number,
    onClick?:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit',
    textColor?: string,
    vote_count?: number,
    popularity?: number,
    vote_average?: number,
};

const testImage = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-mulan-1571175006.jpg';

const FilmCard = ({
       alt = 'Movie Poster',
       title = 'Raya and the Last Dragon',
       image = testImage,
       genre = 'comedy',
       variant = 'h6',
       vote_count = 1,
       popularity = 1.5,
       vote_average = 8.5,
       onClick,
 }: TProps) => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={alt}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        {t(title)}
                    </Typography>
                    <Rating size={'medium'} defaultValue={vote_average} max={10} precision={0.5} readOnly/>
                    <Typography gutterBottom variant={variant}>
                        {t('Vote count: ' + `${vote_count}`)}
                    </Typography>
                    <Typography gutterBottom variant={variant}>
                        {t('Popularity: ' + `${popularity}`)}
                    </Typography>
                    <Typography gutterBottom variant={variant}>
                        {t('Genres: ' + `${genre}`)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default FilmCard;