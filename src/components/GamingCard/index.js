import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'
import {
  GamingCardItemContainer,
  GamingImageCard,
  VideoCardContent,
  VideoCardContentContainer,
  VideoCardLogo,
} from './styledComponents'

const GamingCard = props => {
  const {videoDetails} = props
  const {id, title, thumbNailUrl, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const linkStyle = {
          textDecoration: 'none',
        }
        return (
          <Link style={linkStyle} to={`/videos/${id}`}>
            <GamingCardItemContainer>
              <GamingImageCard alt="video thumbnail" src={thumbNailUrl} />
              <VideoCardContentContainer>
                <VideoCardContent isLightTheme={isLightTheme}>
                  {title}
                </VideoCardContent>
                <VideoCardLogo isLightTheme={isLightTheme}>
                  {viewCount} Watching Worldwide
                </VideoCardLogo>
              </VideoCardContentContainer>
            </GamingCardItemContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingCard
