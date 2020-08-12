import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  homePageCelebrityTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  },
  homePageCelebrityTitleCopy: {
    ...theme.typography.h2Alt
  },
  homePageCelebritySubText: {
    ...theme.typography.h2AltLight
  },
  homePageCelebritySubTitle: {
    textAlign: 'left',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: '0 auto'
    }
  }
}))
export default (props) => {

    const { classData } = props
    const classes = useStyles(props)

    return (
      <Grid className={classData.homePage}>
        <Typography
          component="h2"
          className={classnames(classes.homePageCelebrityTitle, classes.homePageCelebrityTitleCopy)}
          gutterBottom
        >
          Celebrity <span className={classes.homePageCelebritySubText}>Style</span>
        </Typography>
        <Typography variant="h5" className={classes.homePageCelebritySubTitle}>
          Dress like your favorite celebrities with items from Tie Bar.
        </Typography>
      </Grid>
    )
}
