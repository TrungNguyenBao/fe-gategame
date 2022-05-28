import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

const TheCommunityRecommend: React.FC = () => {
    return (
        <section className="container">
            <h2>The Community Recommend’s</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <a href="https://gategame.io/heroes-origin-p11293.html" >
                            <img className="main-img" src="https://cdn.gategame.io/storage/upload/product/80r9evZwYYsf2kYc6vVcdZvcHrrzBUbFDpXlDkEd.png?w=877&amp;auto=compress,format" />
                            <div className="overlay"></div>
                        </a>
                        <div className="slider-details">
                            <h6>
                                <img src="https://cdn.gategame.io/storage/upload/product/rH0pHyWInbfN0sMEowxrcWt2enAZQ5pFM95tQle8.png?w=16&amp;auto=compress,format" />
                                GGWP
                            </h6>
                            <h3>
                                <a className="text-title" href="https://gategame.io/heroes-origin-p11293.html" >
                                    Heroes Origin
                                </a>
                            </h3>
                            <div className="row no-gutters">
                                <div className="custom-tooltip position-top col-sm-11 col-md-12 col-lg-11 col-xl-11 --jsfied">
                                    <ul className="-primary">
                                        <li><a href="#" >play2earn</a></li>
                                        <li className=""><a href="#" >win2earn</a></li>

                                        <li className="-more --hidden">
                                            <a href="#" className="btn btn-like btn-more" aria-expanded="false">More <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                            <ul className="-secondary">

                                                <li className=""><a href="#" >play2earn</a></li>
                                                <li><a href="#" >win2earn</a></li>

                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="popular-details">
                            <div className="popular-box">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="quote">
                                            <img src="/images/gate_game/quote.png" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <span className="rating green" id="score_11293">--</span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Boss hunting is a pretty good task in the game!!!...
                            </p>
                            <a href="#" >Read full review</a>
                            <a href="#" >
                                <div className="user-info">
                                    <img src="/images/gate_game/user1.png" />
                                    <div>
                                        <h3>trevorgoodies ·</h3>
                                        <span>10</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default TheCommunityRecommend;