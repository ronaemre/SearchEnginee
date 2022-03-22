import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import logo from '../png/logo.png'
import icon from '../png/icon.png'
import { getSearchs } from '../api/api'
import ReactPaginate from 'react-paginate';


const theme = createTheme();
const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        padding: '20px'
    },
    logo: {
        width: '149px',
        height: '63px',
        marginLeft: '37px',
        marginTop: '27px',
    },
    searchBarDiv: {
        marginLeft: '34px',
        marginTop: '35px'
    },
    input: {
        width: '509px',
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
        background: '#4F75C2',
        border: '#4F75C2',
        color: 'white',
        width: '138px',
        height: '46px',
        borderRadius: '8px',
        marginLeft: '24px',
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
        width: '644px',
        height: '258px',
        marginLeft: '243px',
        marginTop: '-35px',
        '& :hover': {
            borderRadius: '4px',
            color: '#484848',
            backgroundColor: '#C4C4C4',
        },
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
        height: '93px',
        textAlign: 'left',
    },
    countryAndCity: {
        marginTop: '46px',
        color: '#484848'
    },
    nameAndDate: {
        width: '216px',
        height: '31px',
        left: '241px',
        top: '534px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#686868',
        marginTop: '10px',

    },
    email: {
        marginRight: '190px',
        alignItems: 'flex-start',
        width: '216px',

    },

    orderButton: {
        marginLeft: '0px',
        marginBottom: '-10px',
        width: '87px',
        height: '105px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#484848',
        cursor: 'pointer',
        backgroundColor: 'white',
        border: '0px solid white'

    },
    orderIconDiv: {
        marginLeft: '800px',

    },
    orderOptions: {
        position: 'absolute',
        width: '156px',
        height: '136px',
        left: '835px',
        top: '205px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #484848',
        borderRadius: '4px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '16px',
        cursor: 'pointer',
        '&:hover': {
            background: 'white',
        }
    },
    orderItems: {
        display: 'flex',
        marginLeft: '20px',
        '&:hover': {
            background: '#C4C4C4',
            borderRadius: '4px',
            width: '128px',
            height: '25px',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    paginationBttns: {
        width: '80%',
        height: '40px',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '16px',
        '& a': {
            padding: '10px',
            margin: '8px',
            borderRadius: '5px',
            border: '1px solid black',
            color: '#484848',
            cursor: 'pointer'
        },
        '& a:hover': {
            color: 'white',
            backgroundColor: '#204080'
        }
    },
    paginationActive: {
        '& a': {
            color: 'white',
            backgroundColor: '#204080',
        },
    },
    footer: {
        marginTop: '400px',
        marginRight: '500px'
    }
}))

const SearchMore = ({ searchs, setSearchs }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [show, setShow] = useState(false)
    const classes = useStyles()
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(searchs.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const handleShow = () => setShow(true);

    useEffect(() => {
        getSearchs(setSearchs)
    }, [])

    function sortByCountryAscending() {
        const sortedAscending = searchs
        sortedAscending.sort((a, b) => a[4] > b[4] ? 1 : -1);
        setSearchs(sortedAscending)
        setShow(false)
        console.log(sortedAscending)
    };

    function sortByNameDescending() {
        const sortedDescending = searchs
        sortedDescending.sort((a, b) => a[4] < b[4] ? 1 : -1);
        setShow(false)
        setSearchs(sortedDescending)

    };

    function sortByYearAscending() {
        const sortedAscending = searchs
        sortedAscending.sort((a, b) => a[3] > b[3] ? 1 : -1);
        setShow(false)
        setSearchs(sortedAscending)
    };

    function sortByYearDescending() {
        const sortedDescending = searchs
        sortedDescending.sort((a, b) => a[3] < b[3] ? 1 : -1);
        setShow(false)
        setSearchs(sortedDescending)
    };

    const displayUsers = searchs
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .filter((filtered) => {
            if (filtered[4].includes(searchTerm)) {
                return filtered
            }
        })
        .map((prods, index) => (
            <>
                {
                    <div className={classes.listResult} >
                        <div className={classes.countryAndCity}>
                            {prods[4]}-{prods[5]}
                            <div className={classes.nameAndDate}>
                                {prods[0]}-{prods[3]}
                            </div>
                        </div>
                        <div className={classes.email}>
                            {prods[2]}
                        </div>
                    </div>
                }
            </>
        ))

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.logoDiv} >
                    <img className={classes.logo} src={logo}></img>
                </div>
                <div className={classes.searchBarDiv}>
                    <form>
                        <input
                            className={classes.input}
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className={classes.button} type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className={classes.orderIconDiv}>
                <img id="icon" className={classes.icon} src={icon}></img>
                <button id="orderBy" onClick={() => handleShow()} className={classes.orderButton}>Order By</button>
                {show == true &&
                    <div className={classes.orderOptions}>
                        <p id="sortByCountryAscending" className={classes.orderItems} onClick={() => sortByCountryAscending()}>Country ascending</p>
                        <p className={classes.orderItems} onClick={() => sortByNameDescending()}>Country descending</p>
                        <p className={classes.orderItems} onClick={() => sortByYearAscending()}>Year ascending</p>
                        <p className={classes.orderItems} onClick={() => sortByYearDescending()}>Year descending</p>
                    </div>}
            </div>
            <div>
                <div className={classes.results}>
                    {
                        displayUsers
                    }
                </div>
                <div id="paginate" className={classes.footer}>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={classes.paginationBttns}
                        previousLinkClassName={classes.previousBttn}
                        nextLinkClassName={classes.nextBttn}
                        disabledClassName={classes.paginationDisabled}
                        activeClassName={classes.paginationActive}
                    />
                </div>
            </div>

        </div>
    )
}

export default SearchMore
