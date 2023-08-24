import styled from 'styled-components'

import { Layout as AntLayout } from 'antd'
import { FaExchangeAlt } from 'react-icons/fa'

const { Header: AntHeader, Content: AntContent, Sider } = AntLayout

export const Wrapper = styled(AntLayout)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .ant-menu {
    background-color: transparent;
    margin-top: 1rem;
    
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      padding-left: 24px !important;
      font-size: 13px;
    }

    .ant-menu-submenu-selected {
      color: #E5333A;
    }
    
    :not(.ant-menu-horizontal) .ant-menu-submenu-selected {
      background-color: transparent;
    }
 
    svg {
      font-size: 24px !important;
      border-radius: 2px;
      color: #BEB0B0;
      margin: 0.6rem 0 !important;
      
        :hover {
          color: #302020;
          background-color: #ffffff;
          -webkit-box-shadow: 0px 0px 0px 8px #ffffff;
          box-shadow: 0px 0px 0px 8px #ffffff;
        }
    }

    .ant-menu-submenu-selected {
      svg {
        color: #E5333A;
        background-color: #E5DFE0;
        -webkit-box-shadow: 0px 0px 0px 8px #E5DFE0;
        box-shadow: 0px 0px 0px 8px #E5DFE0;
      }
    }
    
  }
`

export const Sidebar = styled(Sider)`
  background-color: #F0EDED;
  .ant-menu-root {
    max-height: calc(100vh - 100px) !important;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
      background: #E5333A;
    }
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #E5DFE0;
    color: #E5333A;
  }
  .ant-menu-inline .ant-menu-item::after {
    display: none;
  }
`

export const Header = styled(AntHeader)`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 0px #0000000D;
  padding: 0 2rem;

  svg {
    color: #BEB0B0;
    font-size: 24px;
    cursor: pointer;
  }
`

export const Content = styled(AntContent)`
  background-color: transparent;
  display: flex;
  flex: 1;
  min-height: 280;
`

export const LogoWrapper = styled.div`
  height: 80px;
  background-color: #F0EDED;
  border-bottom: 1px solid #BEB0B0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OutletWrapper = styled.div<{ collapsed?: boolean }>`
  width: ${({ collapsed }) => (collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)')};
  flex: 1;
  padding: 1rem;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background: #E5333A;
  }
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: inherit;
`
export const ChangeIcon = styled(FaExchangeAlt)`
  color: inherit !important;
  margin-left: 10px;
  width: 1.3rem;
  height: 1.3rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color: var(--unnamed-color-beb0b0);
  h1 {
    color: var(--unnamed-color-302020);
  };
  cursor: pointer;
  :hover {
    color: var(--main);
    h1 {
      color: var(--main);
    };
  }
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserName = styled.h3`
  color: #302020;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0px;
`

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  object-fit: cover;
`
