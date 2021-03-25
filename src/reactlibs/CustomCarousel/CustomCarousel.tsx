import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { IMovie } from 'src/store/movie/types';
import FilmCard from 'src/reactlibs/FilmCard';
import { IMAGE_URL } from 'src/constants/api';
import { responsive } from './styles';

export type TProps = {
    movies: Array<IMovie>
}

const setting = {
    ssr: true, // means to render carousel on server-side.
    showDots: true,
    infinite: true,
    swipeable: false,
    draggable: false,
    itemClass: "carousel-item-padding-40-px",
    responsive: responsive,
    dotListClass: "custom-dot-list-style",
    autoPlaySpeed: 1000,
    containerClass: "carousel-container",
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    removeArrowOnDeviceType: ["tablet", "mobile"],
}

const CustomCarousel = ({ movies }: TProps) => (
    <Carousel { ...setting } >
        {movies.map((item) =>
            <FilmCard
                key={ item.title }
                alt='Movie Poster'
                color='textSecondary'
                title={ item.title }
                image={`${IMAGE_URL}${item.poster_path}`}
                variant='body2'
                popularity={ item.popularity }
                vote_count={ item.vote_count }
                vote_average={ item.vote_average }
            />
        )}
    </Carousel>
);

export default CustomCarousel;