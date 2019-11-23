import React, { Component } from 'react'
import './BloodFinder.css';
import {Link} from 'react-router-dom';
export default class BloodFinder extends Component {
    // componentDidMount(){
        
    //     if(this.props.location.pathname == '/blood-finder'){
    //         console.log('ok');
    //         console.log(document.querySelector('.cart-icon-box').style.display = 'none')
    //     }
    // }
    render() {
        
        return (
            <div className="">
                <div className="map">

                </div>
                <div className="find-wrap">
                    <div className="finder-btns">
                        <Link to="/blood-details">
                            <button className="blood-finder-btn">
                                <span>Nearby Donors</span>
                            </button>
                        </Link>
                        <Link to="/blood-details">
                            <button className="blood-finder-btn">
                                <span>Nearby Blood Bank</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


