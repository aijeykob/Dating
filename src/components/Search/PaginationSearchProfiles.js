import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './filteredComponent.scss';
import {
    selectDropDown,
    setSelectedProfile,
    getAlbumByUserId,
    changeOffset,
    submitSearch,
    changePagePagination,
    submitSearchAll,

} from '../../actions';
import Pagination from "react-js-pagination";

const PaginationSearchProfiles = (props) => {

    const handlePageChange = (pageNumber) => {
        const improveOffset = 1;
        props.changeOffset(pageNumber - improveOffset);
        props.changePagePagination(pageNumber);
        const d = props.searchParams;
        d.offset = pageNumber - improveOffset;
        (props.searchParams.findAll) ? props.submitSearchAll(d) : props.submitSearch(d)
    };

    return (
        <Fragment>
            <div className='d-flex justify-content-center'>
                <Pagination
                    hideDisabled
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={props.paginationProfiles.activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={props.paginationProfiles.total}
                    pageRangeDisplayed={5}
                    onChange={(e) => handlePageChange(e)}
                />
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    filtered: state.filtered,
    selectedProfile: state.selectedProfile,
    paginationProfiles: state.paginationProfiles,
    searchParams: state.searchParams,
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    setSelectedProfile: (data) => dispatch(setSelectedProfile(data)),
    getAlbumByUserId: (id) => dispatch(getAlbumByUserId(id)),
    changeOffset: (offset) => dispatch(changeOffset(offset)),
    submitSearch: (data) => dispatch(submitSearch(data)),
    submitSearchAll: (data) => dispatch(submitSearchAll(data)),
    changePagePagination: (page) => dispatch(changePagePagination(page)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationSearchProfiles)