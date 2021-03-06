import { useContext, useEffect } from 'react';
import { Context } from 'context/store'
import Header from 'components/header'

const Home = () => {
  const pageTitle = "Home"
  const context = useContext(Context)

  useEffect(() => {
    context.dispatch("CHANGE_PAGE_TITLE", pageTitle)
  }, []);

  return (
    <>
      <Header title={pageTitle} />
    </>
  )
}

export default Home