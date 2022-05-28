export const NewOnBoard: React.FC = () => {
    return (
        <>
            <h2>New on Board</h2>
            {[1, 2, 3, 4].map(() => (
                <div className="">
                    <div className="">
                        <div className=" ">
                            <div className="">
                                <div className="">
                                    <a href="https://gategame.io/stellaverse-frontier-p11163.html">
                                        <img src="https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?h=75&amp;auto=compress,format" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h6>
                                        <img src="/images/gate_game/hero-ic1.png" />
                                        GGWP
                                    </h6>
                                    <h3>
                                        <a className="" href="https://gategame.io/stellaverse-frontier-p11163.html">
                                            Stellaverse: FRONTIER
                                        </a>
                                    </h3>
                                    <div className="">
                                        <ul className="">
                                            <li><a href="#">multiverse</a></li>
                                            <li className=""><a href="#">play2earn</a></li>
                                            <li className=""><a href="#">win2earn</a></li>

                                            <li className="-more">
                                                <a href="#" className="" >
                                                    More
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                                <ul className="">

                                                    <li className=""><a href="#">multiverse</a></li>
                                                    <li className=""><a href="#">play2earn</a></li>
                                                    <li><a href="#">win2earn</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                <div className="list-line">
                                    <span className="rating green" id="score_11163">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            ))}
        </>
    )
}

export const TopReviewers: React.FC = () => {
    return (
        <>
            <h2>Top Reviewers</h2>
        </>
    )
}


const NewOnBoardAndTopReviewers: React.FC = () => {
    return (
        <section>
            <div className='container flex justify-between '>
                <div className='w-1/2'>
                    <NewOnBoard />
                </div>
                <div className='w-1/2'>
                    <TopReviewers />
                </div>
            </div>
        </section>
    )
}


export default NewOnBoardAndTopReviewers;