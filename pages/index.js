import React, { useContext } from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'

import Header from "../components/home/Header"
import Divider from "../components/home/Divider"
import TrendBanners from "../components/home/TrendBanners"
import VideoBanner from "../components/home/VideoBanner"
import OptionsBanner from "../components/home/OptionsBanner"
import CelebrityBannerHeader from "../components/home/CelebrityBannerHeader"
import CelebrityBanner from "../components/home/CelebrityBanner"

import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
  homePage: {
    margin: '0 auto',
    overflow: 'hidden'
  },
  homePageMainBodyGrid: {
    padding: '0 40px',
    maxWidth: '1180px',
    margin:"0 auto",
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  }
}))

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)

  // console.log('props', useLazyState(lazyProps))
  const { homebanner,
          trendbanners,
          videobanner,
          optionbanners,
          options,
          celebritybanners,
          mediabanners
  } = useLazyState(lazyProps)[0]

  return <div>
          <Header data={ homebanner } />
          <Divider margin="50" />
          <Grid className={classes.homePageMainBodyGrid}>
            <TrendBanners data={trendbanners}  classData={classes} />
            <Divider margin="50" />
            <VideoBanner data={videobanner} classData={classes} />
            <Divider margin="50" />
            <OptionsBanner data={optionbanners} classData={classes} />
            <Divider margin="50" />
            <CelebrityBannerHeader classData={classes} />
            <Divider margin="23" />
            <CelebrityBanner data={celebritybanners} classData={classes} />
            <Divider margin="67" />
          </Grid>
         </div>
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999');
  return fetchFromAPI(options)
})
