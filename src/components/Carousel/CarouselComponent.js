import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './carouselComponent.scss';
// backgroundImage: `url('/public/images/peopleMain.jpeg')`,
import InfiniteCarousel from 'react-leaf-carousel';
import {selectDropDown} from "../../actions";

const CarouselComponent = (props) => {

    return (
        <Fragment>
            <div className='carouselContainer'>
                <div className='carouselWrapper'>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                            {
                                breakpoint: 1300,
                                settings: {
                                    slidesToShow: 8,
                                    slidesToScroll: 3,
                                },
                            },
                            {
                                breakpoint: 850,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 3,
                                },
                            },
                        ]}
                        showSides={true}
                        sidesOpacity={.0}
                        sideSize={.3}
                        slidesToScroll={4}
                        slidesToShow={10}
                        scrollOnDevice={true}
                        // autoCycle={true}
                    >
                        {
                            props.randomImages.map(el => {
                                console.log(el);
                                return <div className='wrapperImg' key={el.url}><img src={el.url} alt='' height='130'/></div>
                            })
                        }
                    </InfiniteCarousel>
                </div>
            </div>
        </Fragment>
    );
};
const mapStateToProps = state => ({
    randomImages: state.randomImages,
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarouselComponent)