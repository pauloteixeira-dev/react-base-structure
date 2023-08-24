import React from 'react'
import {
  MdLogout,
  MdMenu,
  MdSettings
} from 'react-icons/md'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout as AntLayout, Menu, Tooltip } from 'antd'
import { useGlobalContext } from 'hooks/useGlobalContext'
import useLogin from 'hooks/api/useLogin'
import {
  subMenuItems,
  TMenuItem,
  TMenuOption,
  TSubMenuItem,
  TSubMenuOption,
} from 'model/dtos/Menu'
import { useAuth } from 'hooks/useAuth'
import { AiFillDatabase } from 'react-icons/ai'
import { GiPlantWatering } from 'react-icons/gi'
import {
  Wrapper,
  Sidebar,
  Header,
  Content,
  LogoWrapper,
  HeaderTitle,
  UserWrapper,
  UserName,
  OutletWrapper,
  HeaderTitleContainer,
  ChangeIcon,
  TitleWrapper,
} from './styles'

const Layout: React.FC = () => {
  const { logout } = useLogin()
  const { collapsed, setCollapsed } = useGlobalContext()
  const { userData } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  const parseSubMenuOptionToSubMenuItem = (subMenuOption: TSubMenuOption) => {
    const subMenuItem: TSubMenuItem = {
      key: subMenuOption.key,
      label: subMenuOption.label,
      onClick: () => navigate(subMenuOption.route),
    }
    return subMenuItem
  }

  const sortByLabel = (initialArray: { label: string }[]) => initialArray.sort((a, b) => {
    if (a.label < b.label) {
      return -1
    }
    if (a.label > b.label) {
      return 1
    }
    return 0
  })

  const sortSubmenuByLabel = (initialArray: TSubMenuOption[]) => sortByLabel(initialArray) as TSubMenuOption[]
  const sortMenuByLabel = (initialArray: TMenuItem[]) => sortByLabel(initialArray) as TMenuItem[]

  const menuItens: TMenuOption[] = [
    {
      label: 'Cadastros',
      key: '/cadastros',
      icon: <AiFillDatabase />,
      children: sortSubmenuByLabel([
        subMenuItems.CICLOS,
        subMenuItems.REGIOES,
        subMenuItems.MARCAS_DE_PRODUTO,
        subMenuItems.SAFRAS,
        subMenuItems.TIPOS_DE_MAPA,
        subMenuItems.TIPOS_DE_SAFRA,
        subMenuItems.TIPOS_DE_RECOMENDACOES,
        subMenuItems.UNIDADES,
        subMenuItems.PRODUTORES,
        subMenuItems.CULTURAS,
        subMenuItems.CLASSIFICACOES,
        subMenuItems.TIPOS_DE_OPERACAO,
        subMenuItems.CAMADAS,
        subMenuItems.FAZENDAS,
        subMenuItems.MAPAS,
      ])
    },
    {
      label: 'Configurações',
      key: '/config',
      icon: <MdSettings />,
      children: sortSubmenuByLabel([
        subMenuItems.PERMISSOES_DE_ACESSO,
        subMenuItems.USUARIOS,
      ])
    },
    {
      label: 'Recomendação',
      key: '/recommendation',
      icon: <GiPlantWatering />,
      children: sortSubmenuByLabel([
        subMenuItems.PRESCRICAO,
      ])
    },
  ]

  const allowedMenus: TMenuItem[] = []
  menuItens.forEach(menu => {
    let allowedSubMenus: TSubMenuItem[] = []
    menu.children?.forEach(subMenu => {
      if (
        !subMenu.permissionKey || userData?.permissions.includes(subMenu.permissionKey)
      ) {
        allowedSubMenus = [
          ...allowedSubMenus,
          parseSubMenuOptionToSubMenuItem(subMenu),
        ]
      }
    })

    if (allowedSubMenus.length > 0) {
      const allowedMenu: TMenuItem = {
        ...menu,
        children: allowedSubMenus,
      }
      allowedMenus.push(allowedMenu)
    }
  })

  return (
    <Wrapper>
      <Sidebar trigger={null} collapsible collapsed={collapsed}>
        <LogoWrapper>
          <img src='/svg/logo-red.svg' alt='Drakkar red logo' />
        </LogoWrapper>
        <Menu
          selectedKeys={[location.pathname]}
          mode='inline'
          triggerSubMenuAction='click'
          items={sortMenuByLabel(allowedMenus)}
        />
      </Sidebar>
      <AntLayout>
        <Header>
          {React.createElement(MdMenu, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <HeaderTitleContainer>
            {userData?.producer?.name && (
              <Tooltip title='Alterar produtor'>
                <TitleWrapper>
                  <HeaderTitle onClick={() => navigate('/producer-select/select')}>
                    {userData?.producer?.name}
                  </HeaderTitle>
                  <ChangeIcon />
                </TitleWrapper>
              </Tooltip>
            )}
          </HeaderTitleContainer>
          <UserWrapper>
            <UserName>{userData?.name}</UserName>
            <Tooltip title='Sair'>
              <MdLogout onClick={handleLogout} />
            </Tooltip>
          </UserWrapper>
        </Header>
        <Content>
          <OutletWrapper collapsed={collapsed}>
            <Outlet />
          </OutletWrapper>
        </Content>
      </AntLayout>
    </Wrapper>
  )
}

export default Layout
