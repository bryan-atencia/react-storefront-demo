import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { makeStyles, Grid, Typography } from '@material-ui/core'

import Divider from './Divider'
import TrendTile from '../misc/TrendTile'

const useStyles = makeStyles((theme) => ({
  homePageTrendBannerTiles: {
    maxWidth: '32%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%'
    }
  },
  homePageTrendingBannerTitleWrapper: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  trendBannerTitleBold: {
    ...theme.typography.h2Alt
  },
  homePageTrendingBannerTitle: {
    ...theme.typography.h2AltLight
  },
  homePageTrendingBannerSubtitle: {
    textAlign: 'left',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: '0 auto'
    }
  },
  tilesGrid: {
    [theme.breakpoints.down("sm")]: {
      maxWidth:"95%",
      margin:"0 auto"
    }
  },
  trendBannerLazyBlock: {
    [theme.breakpoints.up("md")]: {
      minHeight: "650px",
    }
  }
}))

export default (props) => {
  const { data, classData } = props
  const classes = useStyles(props)

    return <Grid className={classData.homePage}>
              <Typography
                component="h2"
                className={classnames(
                  classes.trendBannerTitleBold,
                  classes.homePageTrendingBannerTitleWrapper
                )}>
                New <span className={classes.homePageTrendingBannerTitle}>Shirts and Ties</span>
              </Typography>
              <Typography className={classes.homePageTrendingBannerSubtitle} variant="h5">
                A round-up of strong trends and notable new arrivals
              </Typography>
                <Divider margin="25" />
                <Grid container justify="space-between" className={ classes.tilesGrid }>
                  {data.map((x, y) => {
                    return (
                      <Link href="/ties">
                        <Grid
                          key={y}
                          container
                          item
                          xs={12}
                          sm={4}
                          className={classes.homePageTrendBannerTiles}>
                            <TrendTile data={x} />
                        </Grid>
                      </Link>
                    )
                  })}
                </Grid>
            </Grid>
  }
