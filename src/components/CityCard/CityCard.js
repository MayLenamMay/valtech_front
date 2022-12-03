import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../ButtonLink/ButtonLink';
import './cityCard.scss'

function CityCard({ info, isBanner }) {

    const navigate = useNavigate();
    const defaultImg = 'https://images.unsplash.com/photo-1636865266989-58043bceaa71?format=640x480';
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    if (isBanner) {

    };
    let props = {};
    if (!isBanner && !isMobile) {
        props = {
            initial: "rest",
            whileHover: "hover",
            animate: "rest"
        };
    };
    const redirectionMobile = (url) => {
        if (!isBanner && isMobile) {
            navigate(`/city/${url}`)
        };
    }


    /* -------------------------------------------------------------------------- */
    /*                                  Animatiojn variables                                 */
    /* -------------------------------------------------------------------------- */
    const textMotion = {
        rest: {
            y: 0,
            opacity: 0,
            height: 0,
            transitionEnd: { display: "none" }
        },
        hover: { y: 30, display: "block", opacity: 1, height: "auto" }
    };
    const titleMotion = {
        rest: {
            y: 0,
            scale: 1,
        },
        hover: {
            scale: 0.3,
            y: -90,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            },
        },
        click: {
            scale: 0.3,
            y: -90,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            },
        }
    };

    /* -------------------------------------------------------------------------- */
    /*                                 Check image                                 */
    /* -------------------------------------------------------------------------- */
    const DefaultImg = (altTxt) => {
        return <img src={defaultImg} alt={altTxt} />
    }
    const CustomImg = ({ img }) => {

        return <img src={img.img} alt={img.altTxt} />
    }
    const NullImage = ({ img, altTxt }) => {
        if (img === null || img === '') { return <DefaultImg img={altTxt}></DefaultImg> } else { return <CustomImg img={{ img, altTxt }}></CustomImg> }
    }

    return (
        <motion.div {...props} className={`cityCard ${isBanner ? '' : 'hover'}`} key={info.id} onClick={(e) => redirectionMobile(e, info.id)}>
            <div className="cityCard__wrapper" >
                <div className="cityCard__header" variants={isBanner ? null : titleMotion} >
                    <div className="sub_tile">
                        {info.country_name}
                    </div>
                    {isBanner ? (
                        <h1>
                            {info.city}
                        </h1>) :
                        (
                            <h2>
                                {info.city}
                            </h2>
                        )}

                </div>
                <motion.div className="cityCard__content" variants={isBanner ? null : textMotion} >
                    <div className="cityCard__desc">
                        {info.body}
                    </div>
                    {info.link && (<ButtonLink link={'/city/' + info.id} text='Explore More'></ButtonLink>)}
                </motion.div>
            </div>
            <div className="cityCard__img">
                {NullImage({ img: info.image_url, altTxt: info.city })}
            </div>
        </motion.div>
    )
}

export default CityCard;
CityCard.propTypes = {
    city: PropTypes.object,
};
CityCard.defaultProps = {
    isBanner: false,
};
