import React from 'react'
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CityCard from '../../components/CityCard/CityCard';
function City() {
    let params = useParams();
    const cityId = params.id;
    const banner = {
        "id": -1,
        "country_name": "Front-end",
        "city": `City ${cityId}`,
        body: "Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.Viv",
        image_url: "https://images.unsplash.com/photo-1576053653130-b3fbd594de67?format=640x480",
        "link": "",
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="banner">
                <CityCard info={banner} isBanner={true}></CityCard>
            </div>
        </motion.div>
    )
}

export default City