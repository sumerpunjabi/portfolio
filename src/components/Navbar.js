import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'Home'
    },
]

export default function Navbar() {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'Home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 fontSize={'1rem'}>
            </Box>
        </Box>
    )
}