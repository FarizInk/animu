import { useContext, useEffect } from 'react';
import { Context } from 'context/store'
import Header from 'components/header'
import axios from 'axios'
import { MyCard, CardSkeleton } from 'components/card'
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const Index = () => {
  const pageTitle = "Trending"
  const context = useContext(Context)

  const getData = async () => {
    context.dispatch('SET_LOADING', true)
    await axios.get(process.env.API_URL_FIRST + 'trending/anime')
      .then((response) => {
        context.dispatch('CHANGE_TRENDING_ANIME', response.data.data)
        context.dispatch('SET_LOADING', false)
        context.dispatch('SET_VALUE_SNACKBAR', { message: "Success get information from kitsu.io!", time: 3000 })
        context.dispatch('SET_SNACKBAR', true)
      })
      .catch((err) => {
        const error = err.response.data.errors[0]
        console.log(error);
        context.dispatch('CHANGE_ERROR_MESSAGE', error)
      });
  }

  useEffect(() => {
    context.dispatch("CHANGE_PAGE_TITLE", pageTitle)
    getData()
  }, []);

  const render = () => {
    if (context.state.isLoading
      && context.state.trendingAnime === null
    ) {
      return (
        <Grid container spacing={3}>
          {
            ['', '', '', '', '', '',].map((item, i) => (
              <Grid item xs={12} sm={12} md={6} key={i}>
                <CardSkeleton />
              </Grid>
            ))
          }
        </Grid>
      )
    } else {
      let itteration = 1;
      return (
        <Grid container spacing={3}>
          {
            context.state.trendingAnime.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <MyCard position={itteration++} title={item.attributes.canonicalTitle} jpTitle={item.attributes.titles.ja_jp} image={item.attributes.coverImage.small} description={item.attributes.description} />
              </Grid>
            ))
          }
        </Grid>
      );
    }
  }

  return (
    <>
      <Header title={pageTitle} />
      <Container maxWidth="md">
        {render()}
      </Container>
    </>
  )
}

export default Index