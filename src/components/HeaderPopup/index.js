import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {FaGamepad} from 'react-icons/fa'
import {RiMenuAddFill} from 'react-icons/ri'
import {
  CrossIconButton,
  ModalContainer,
  NavLinksList,
  Button,
  NavLinkItem,
  NavLinkContent,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

const lightThemeStyle = {
  fontSize: '24px',
}
const darkThemeStyle = {
  fontSize: '24px',
  color: '#ffffff',
}

const activeLinkStyles = {
  display: 'flex',
  color: '#ff0b37',
  fontSize: '24px',
  textDecoration: 'none',
}

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

class HeaderPopup extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {history} = this.props
          const {pathname} = history.location
          const overlayStyles = {
            backgroundColor: isLightTheme ? '#fff' : '#181818',
            padding: '20px',
            height: '100vh',
            border: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
          }
          const normalLinkStyles = {
            display: 'flex',
            fontSize: '24px',
            textDecoration: 'none',
            color: isLightTheme ? '#0f0f0f' : '#ffffff',
          }

          const style = isLightTheme ? lightThemeStyle : darkThemeStyle
          return (
            <Popup
              modal
              trigger={
                <Button type="button">
                  <GiHamburgerMenu style={style} />
                </Button>
              }
              overlayStyle={overlayStyles}
            >
              {close => (
                <ModalContainer>
                  <CrossIconButton type="button" onClick={() => close()}>
                    <IoMdClose style={style} />
                  </CrossIconButton>
                  <NavLinksList>
                    {popUpLinks.map(each => {
                      const {tabId, text, navLink, icon} = each
                      const isActive = navLink === pathname

                      return (
                        <NavLinkItem
                          key={tabId}
                          isLightTheme={isLightTheme}
                          isActive={isActive}
                        >
                          <Link
                            style={
                              isActive ? activeLinkStyles : normalLinkStyles
                            }
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
                        </NavLinkItem>
                      )
                    })}
                  </NavLinksList>
                </ModalContainer>
              )}
            </Popup>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(HeaderPopup)
