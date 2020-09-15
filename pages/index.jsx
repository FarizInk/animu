import { useContext, useEffect, useState } from 'react';
import { Context } from 'context/store'
import Header from 'components/header'
import axios from 'axios'
import { MyCard, CardSkeleton } from 'components/card'
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const Index = () => {
  const pageTitle = "Trending"
  const context = useContext(Context)
  const mode = context.state.mode
  const [data, setData] = useState(null)

  const getData = async () => {
    setData(mode === 'anime' ? context.state.trendingAnime : context.state.trendingManga)
    if (data === null) context.dispatch('SET_LOADING', true)
    context.dispatch('ADD_SNACKPACK', { message: "Getting new information from kitsu.io...", time: 3000 })
    await axios.get(process.env.API_URL_FIRST + 'trending/' + mode)
      .then((response) => {
        (mode === 'anime') ? context.dispatch('SET_TRENDING_ANIME', response.data.data) : context.dispatch('SET_TRENDING_MANGA', response.data.data)
        setData(response.data.data)
        context.dispatch('SET_LOADING', false)
        context.dispatch('ADD_SNACKPACK', { message: "Success get information from kitsu.io!", time: 3000 })
      })
      .catch((err) => {
        const error = err.response
        console.log(error)
        context.dispatch('ADD_SNACKPACK', { message: "Some Error!", time: 3000 })
      });
  }

  useEffect(() => {
    context.dispatch("CHANGE_PAGE_TITLE", pageTitle)
    setTimeout(() => {
      getData()
    }, 400);
  }, [mode]);

  const render = () => {
    if (data === null) {
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
            data.map((item, index) => {
              let coverImage = null
              if (item.attributes.coverImage !== null) coverImage = item.attributes.coverImage.small
              return (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <MyCard position={itteration++} title={item.attributes.canonicalTitle} jpTitle={item.attributes.titles.ja_jp}
                    image={coverImage}
                    description={item.attributes.description} />
                </Grid>
              )
            })
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