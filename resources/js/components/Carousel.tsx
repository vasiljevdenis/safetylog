import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface SliderParams {
    arrows: boolean;
    dots: boolean;
    autoplay: boolean;
    loading: string;
    zoom: boolean;
    items: string[];
    setText: any;
};

function Carousel(props: SliderParams) {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: props.arrows,
        dots: props.dots,
        infinite: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        variableWidth: false,
        variableHeight: true,
        speed: 800,
        autoplay: props.autoplay,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        className: "innerSlider",
        nextArrow: <KeyboardArrowRightIcon />,
        prevArrow: <KeyboardArrowLeftIcon />
    };

    const [slider, setSlider] = useState(props.items);

    const changeText = (i: number) => {
        console.log(i);

        props.setText(i);
    };

    return (
        <Slider {...settings} beforeChange={(c, i) => changeText(i)}>
            {slider.map((item, i) => (
                <Box key={'slider-item' + i} sx={{ maxWidth: 500 }}>
                    <img
                        src={item}
                        alt={'Slider item ' + i}
                        style={{ width: '100%' }}
                    />
                </Box>
            ))}
        </Slider>
    )
}

Carousel.defaultProps = {
    arrows: true,
    dots: false,
    autoplay: true,
    loading: 'lazy',
    zoom: false
};

export default Carousel