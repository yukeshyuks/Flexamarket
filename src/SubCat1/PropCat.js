import React from 'react'
import { Button } from 'react-bootstrap'

import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import HouseIcon from '@mui/icons-material/House';
import TerrainIcon from '@mui/icons-material/Terrain';
import ApartmentIcon from '@mui/icons-material/Apartment';
import "./PropCat.css";
import  Link  from '@mui/material/Link';

//This File displays the sub-categories available under the category Property
//This file uses icons from Material-ui

export default function PropCat() {
    return (
        <div className='cat1'><h1 className='rat1'>Select Your SubCategory</h1>
             <div className='one1'  ><pre>{<ApartmentIcon style={{fill: "#C13584"}}/>} <Link href="/product"> <Button className='subcat'> Apartments </Button></Link></pre></div>
             <div className='two1' ><pre>{<TerrainIcon style={{fill: "#F9C5D5"}}/>} <Link href="/product"> <Button className='subcat'> Lands & Plots </Button></Link></pre></div>

                    
                    <div className='three1' ><pre>{<ShoppingCartIcon style={{fill: "#FFE400"}}/>} <Link href="/product"> <Button className='subcat' > Shops & Offices</Button></Link></pre></div>
                    <div className='four1'  ><pre>{<HouseSidingIcon style={{fill: "#519259"}}/>} <Link href="/product"> <Button className='subcat' >  PG & Guest Houses</Button></Link></pre></div>
                    <div className='five1' ><pre>{<HouseIcon style={{fill: "#F90716"}}/>} <Link href="/product"> <Button className='subcat' > Houses </Button></Link></pre></div>
                    <div className='six1' ><pre>{<LocalParkingIcon style={{fill: "#2C272E"}}/>} <Link href="/product"> <Button className='subcat' > Parking </Button></Link></pre></div>
                    <div class="custom-shape-divider-bottom-1642824782-SU">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
            
        </div>
    )
}
