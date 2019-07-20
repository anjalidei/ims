import React from 'react'
import '../css/gobal.css'


// Components
import Layout from '../components/Layout'
import Header from '../components/Header/Header'
import Home from './Home'

export default class Index extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var topBar = document.getElementById('top-bar-section');
        var nav = document.getElementById('nav-bar-overlay');
        var offSet = document.getElementById('parallaxContainer').offsetTop - window.pageYOffset;
        if(window.pageYOffset > 0){
            topBar.classList.add('hide');
        }
        else{
            topBar.classList.remove('hide');
        }
        if (offSet < 113) {
            nav.classList.add('fullNavBar');
            nav.classList.remove('transparentNavBar');
        } else {
            nav.classList.remove('fullNavBar');
            nav.classList.add('transparentNavBar');
        }
    };

    render() {
        return(
            <>
                <Layout />
                <Header />
                <Home />
            </>
        )
    }
}


