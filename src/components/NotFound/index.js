import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NoVideosFoundHeading,
  NoVideosFoundDes,
  NotFoundImg,
  TrendingContainer,
  NotFoundContentContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const imageUrl = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <TrendingContainer isLightTheme={isLightTheme}>
            <SideBar />
            <NotFoundContentContainer isLightTheme={isLightTheme}>
              <NotFoundImg alt="not found" src={imageUrl} />
              <NoVideosFoundHeading isLightTheme={isLightTheme}>
                Page Not Found
              </NoVideosFoundHeading>
              <NoVideosFoundDes isLightTheme={isLightTheme}>
                we are sorry, the page you requested could not be found.
              </NoVideosFoundDes>
            </NotFoundContentContainer>
          </TrendingContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
