import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeContext from '../../Context/ThemeContext'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItem,
  HomeSideMenuBarBottomSection,
  NavLinkContent,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaImage,
  SocialMediaDescription,
} from './styledComponents'

const popUpLinks = [
  {
    tabId: 'HOME',
    text: 'Home',
    navLink: '/',
    icon: <AiFillHome />,
  },
  {
    tabId: 'TRENDING',
    text: 'Trending',
    navLink: '/trending',
    icon: <HiFire />,
  },
  {
    tabId: 'GAMING',
    text: 'Gaming',
    navLink: '/gaming',
    icon: <FaGamepad />,
  },
  {
    tabId: 'SAVEDVIDEOS',
    text: 'Saved Videos',
    navLink: '/saved-videos',
    icon: <RiMenuAddFill />,
  },
]

const activeLinkStyles = {
  display: 'flex',
  color: '#ff0b37',
  fontSize: '24px',
  textDecoration: 'none',
}

const SideBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value

      const {history} = props
      const {pathname} = history.location
      const normalLinkStyles = {
        display: 'flex',
        fontSize: '24px',
        textDecoration: 'none',
        color: isLightTheme ? '#0f0f0f' : '#ffffff',
      }
      return (
        <SideBarContainer isLightTheme={isLightTheme}>
          <SideBarListContainer>
            {popUpLinks.map(each => {
              const {tabId, text, navLink, icon} = each
              const isActive = navLink === pathname

              return (
                <SideBarListItem
                  key={tabId}
                  isLightTheme={isLightTheme}
                  isActive={isActive}
                >
                  <Link
                    style={isActive ? activeLinkStyles : normalLinkStyles}
                    to={navLink}
                  >
                    {icon}
                    <NavLinkContent
                      isActive={isActive}
                      isLightTheme={isLightTheme}
                    >
                      {text}
                    </NavLinkContent>
                  </Link>
                </SideBarListItem>
              )
            })}
          </SideBarListContainer>
          <HomeSideMenuBarBottomSection>
            <ContactUsHeading isLightTheme={isLightTheme}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <SocialMediaDescription isLightTheme={isLightTheme}>
              Enjoy! Now to see your <br />
              channels and <br />
              recommendations!
            </SocialMediaDescription>
          </HomeSideMenuBarBottomSection>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
