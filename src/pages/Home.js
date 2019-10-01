import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/011/news-buildings-jan18-dnaiot.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.weetas.com/article/wp-content/uploads/2018/10/banner-825x450.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/mobile-connected-buildings_connected-means-tile.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
