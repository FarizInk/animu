import { useContext, useEffect } from 'react';
import { Context } from 'store'
import Header from 'components/header'

const Index = () => {
  const pageTitle = "Index"
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

export default Index