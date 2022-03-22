import React, { useEffect, useState } from 'react'
import { getSearchs } from '../api/api'
import logo from '../png/logo.png'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import '../../src/index.css'


//CSS 

const theme = createTheme();
const useStyles = makeStyles(theme => ({

    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '800px',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-around',
    },
    logoDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px',
        marginRight: '90px',
    },
    motto: {
        marginLeft: '233px',
        width: '100px',
        marginTop: '10px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#484848'
    },
    logo: {
        width: '278px',
        height: '115px',
    },
    SearchDiv: {
        justifyContent: 'center',
        marginBottom: '40px',
    },
    input: {
        width: '709px',
        height: '46px',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '8px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#888888',
        '&:hover': {
            background: 'rgba(100, 100, 100, 0.08)',
            border: '2px solid rgba(0, 0, 0, 0.6)'
        }
    },

    button: {
        background: '#204080',
        color: 'white',
        width: '138px',
        height: '46px',
        borderRadius: '8px',
        marginLeft: '16px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21px',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    results: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '670px',
        height: '258px',
        border: '1px solid #484848',
        borderRadius: '4px',
        padding: '20px',
        top: '536px'

    },
    listResult: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #585858',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#484848',
        width: '100%',
        height: '65px',
    },
    countryAndCity: {
        marginTop: '30px',
        color: '#484848'
    },
    nameAndDate: {
        width: '207px',
        height: '26px',
        left: '241px',
        top: '534px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#686868',
        marginTop: '8px'
    },
    showMore: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '14px',
        color: '##000000',
        marginTop: '40px',
        marginLeft: '280px',
        cursor: 'pointer',

    }
}))

const SearchMain = ({ searchs, setSearchs }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const classes = useStyles()

    /*     useEffect(() => {
            getSearchs(setSearchs)
        }, [])
     */
    const handleGetResult = e => {
        e.preventDefault();
        getSearchs(setSearchs)
    }

    const handlesetSearchTerm = e => {
        setSearchTerm(e.target.value)
        setSearchs([])
    }



    function handleDetails() {
        window.location = "/more"
    }

    return (
        <div className={classes.main}>
            <div className={classes.logoDiv}>
                <img id="logo" className={classes.logo} src={logo}></img>
                <p className={classes.motto} >Search web app </p>
            </div>
            <div className={classes.SearchDiv}>
                <div>
                    <form>
                        <input
                            id="input"
                            className={classes.input}
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => handlesetSearchTerm(e)}
                        />
                        <button
                            id="searchButton"
                            className={classes.button}
                            onClick={(e) => handleGetResult(e)}
                            type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <div className={classes.results}>
                    {
                        searchs.filter((filtered) => {
                            if (searchTerm == "") {
                                return null
                            }
                            else if (filtered[4].toLowerCase().includes(searchTerm.toLowerCase())) {
                                return filtered
                            }
                        })
                            .map((prods, index) => (
                                <>
                                    {
                                        index <= 2 &&
                                        <div className={classes.listResult} >

                                            <div id="countryAndCity" className={classes.countryAndCity}>
                                                {prods[4]}-{prods[5]}
                                                <div className={classes.nameAndDate}>
                                                    {prods[0]}-{prods[3]}
                                                </div>
                                            </div>
                                            <div>
                                                {prods[2]}
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                    }
                    {
                        !searchTerm == "" &&
                        <div className={classes.showMore}>
                            <h3 id="showMore" class="pointer" onClick={() => handleDetails()}>
                                Show more..
                            </h3>
                        </div>

                    }
                </div>
            </div>

        </div >
    )
}

export default SearchMain
