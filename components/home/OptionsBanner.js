import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  homePageOptionsBannerGrid: {
    borderTop: theme.divider.line,
    borderBottom: theme.divider.line,
    padding: '49px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '49px 0'
    }
  },
  homePageOptionsGrid: {
    maxWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  homePageOptionButtons: {
    ...theme.buttons.lightButtonHover,
    fontSize: '24px',
    fontFamily: theme.fonts.futuraPTDemi,
    height: '92px',
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      height: '62px',
      width: '255px',
      fontSize: '18px'
    }
  }
}))
export default (props) => {
    const { data, classData } = props
    const classes = useStyles(props)

    return (
      <Grid className={`${classData.homePage} ${classes.homePageOptionsBannerGrid}`}>
        <Grid container justify="space-between">
          {data.map((x, y) => {
            return (
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={4}
                justify="center"
                key={y}
                className={classes.homePageOptionsGrid}>
              <Paper className={classes.homePageOptionButtons}>{x.actiontext}</Paper>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    )

}
