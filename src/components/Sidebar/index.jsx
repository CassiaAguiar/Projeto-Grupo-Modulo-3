import React from 'react'
import { Container, Content } from './styles'
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Menu" />
        <SidebarItem Icon={FaChartBar} Text="Categorias" />
        <SidebarItem Icon={FaUserAlt} Text="Lançamentos" />
        <SidebarItem Icon={FaEnvelope} Text="Favoritos" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Minha Lista" />
      </Content>
    </Container>
  )
}

export default Sidebar
