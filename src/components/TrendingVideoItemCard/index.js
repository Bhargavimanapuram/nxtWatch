import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import ThemeContext from '../../Context/ThemeContext'
import {
  TrendingCardItemContainer,
  TrendingImageCard,
  VideoCardContent,
  VideoCardContentContainer,
  VideoCardLogo,
  VideoItemCardContentContainer,
} from './styledComponents'

const TrendingVideoItemCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbNailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name} = channel
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const style = isLightTheme
          ? {colorL: '#606060', marginTop: '3px'}
          : {color: '#cccccc', marginTop: '3px'}
        const linkStyle = {
          textDecoration: 'none',
        }
        return (
          <Link style={linkStyle} to={`/videos/${id}`}>
            <TrendingCardItemContainer>
              <TrendingImageCard alt="video thumbnail" src={thumbNailUrl} />
              <VideoCardContentContainer>
                <VideoCardContent isLightTheme={isLightTheme}>
                  {title}
                </VideoCardContent>
                <VideoCardLogo isLightTheme={isLightTheme}>
                  {name}
                </VideoCardLogo>
                <VideoItemCardContentContainer>
                  <VideoCardLogo isLightTheme={isLightTheme}>
                    {viewCount} Views
                  </VideoCardLogo>
                  <VscDebugStackframeDot style={style} />
                  <VideoCardLogo isLightTheme={isLightTheme}>
                    {date}
                  </VideoCardLogo>
                </VideoItemCardContentContainer>
              </VideoCardContentContainer>
            </TrendingCardItemContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideoItemCard
