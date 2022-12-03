import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { get } from './../../api';
import CityCard from '../../components/CityCard/CityCard';
import LoadIndicator from '../../components/LoadIndicator/LoadIndicator';
import Paginator from '../../components/Paginator/Paginator'
import './home.scss';
function Home() {

    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const banner = {
        "id": -1,
        "country_name": "Front-end",
        "city": "valtech_",
        body: "Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.Viv",
        image_url: "https://images.unsplash.com/photo-1576053653130-b3fbd594de67?format=640x480",
        "link": "",
    }


    /* -------------------------------------------------------------------------- */
    /*                                  USEEFFECT                                 */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        // Fake api generated from https://mocki.io/
        get('9bb29eb9-5231-4b08-a22c-559f0db162bd').then(({ data }) => {
            setCities(data?.destinations);
            setLoading(false);
        });
    }, []);


    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="banner">
                <CityCard info={banner} isBanner={true}></CityCard>
            </div>

            <div className='container'>
                {loading ?
                    <LoadIndicator loaderText="Loading in progress" /> :
                    <>
                        {cities.length > 0 ? (
                            <Paginator
                                data={cities}
                                RenderComponent={CityCard}
                                title="cities"
                                pageLimit={6}
                            />
                        ) : <h1>No Cities to display</h1>

                        }
                    </>
                }
            </div>
        </motion.div>
    )
}

export default Home