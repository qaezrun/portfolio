import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import {useEffect,useState} from 'react';

function Reviews() {
    const [Data, setFetchedData] = useState([]);

    useEffect(()=>{
        let processing = true
        fetchData(processing)
        return () =>{
            processing = false
        }
    },[])

    const fetchData = async(processing) =>{
        await axios.get('/messages').then(res =>{
            if(processing){
                setFetchedData(res.data)
                console.log(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <div>Testing</div>
    )
}

export default Reviews