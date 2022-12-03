import Home from './Home/Home';
import City from './City/City';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence ExitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} exact />
                <Route path="/city/:id" element={<City />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages