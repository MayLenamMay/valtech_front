import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Paginator.scss'

function Paginator({ data, RenderComponent, pageLimit, nextBtnTxt, prevBtnTxt }) {
    const [pages] = useState(Math.round(data.length / pageLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * pageLimit - pageLimit;
        const endIndex = startIndex + pageLimit;
        return data.slice(startIndex, endIndex);
    };


    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    return (
        <>
            <div className="citiesList">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} info={d} />
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    {prevBtnTxt}
                </button>
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    {nextBtnTxt}
                </button>
            </div>
        </>
    );
}
export default Paginator;
Paginator.propTypes = {
    data: PropTypes.array.isRequired,
    RenderComponent: PropTypes.elementType.isRequired,
    pageLimit: PropTypes.number,
    nextBtnTxt: PropTypes.string,
    prevBtnTxt: PropTypes.string,
};
Paginator.defaultProps = {
    pageLimit: 4,
    nextBtnTxt: 'Next',
    prevBtnTxt: 'Prev',
};