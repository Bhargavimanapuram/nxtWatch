import {RiMenuAddFill} from 'react-icons/ri'
import TrendingVideoItemCard from '../TrendingVideoItemCard'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingContainer,
  TrendingContentContainer,
  VideoItemsContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosFoundHeading,
  NoVideosFoundDes,
  TrendingBannerContainer,
  BannerHeading,
  BannerLogo,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const fireStyles = {
  display: 'flex',
  color: '#ff0b37',
  fontSize: '24px',
  textDecoration: 'none',
}

const SavedVideos = () => {
  const renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <NoVideosViewContainer>
            <NoVideosImage
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <NoVideosFoundHeading isLightTheme={isLightTheme}>
              No saved videos found
            </NoVideosFoundHeading>
            <NoVideosFoundDes isLightTheme={isLightTheme}>
              You can save your videos while watching them
            </NoVideosFoundDes>
          </NoVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const renderBanner = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <TrendingBannerContainer
            isLightTheme={isLightTheme}
            data-testid="banner"
          >
            <BannerLogo isLightTheme={isLightTheme}>
              <RiMenuAddFill style={fireStyles} />
            </BannerLogo>
            <BannerHeading isLightTheme={isLightTheme}>
              Saved Videos
            </BannerHeading>
          </TrendingBannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideosList} = value
        return (
          <>
            {renderBanner()}
            <VideoItemsContainer>
              {savedVideosList.map(video => (
                <TrendingVideoItemCard key={video.id} videoDetails={video} />
              ))}
            </VideoItemsContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, savedVideosList} = value
        return (
          <>
            <Header />
            <TrendingContainer
              data-testid="savedVideos"
              isLightTheme={isLightTheme}
            >
              <SideBar />
              <TrendingContentContainer isLightTheme={isLightTheme}>
                {savedVideosList.length === 0
                  ? renderNoVideosView()
                  : renderSuccessView()}
              </TrendingContentContainer>
            </TrendingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
