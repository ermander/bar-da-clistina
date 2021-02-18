import React from "react"
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return(        
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Antipasti</SidebarLink>
                <SidebarLink to="/">Ravioli</SidebarLink>
                <SidebarLink to="/">Riso</SidebarLink>
                <SidebarLink to="/">Pasta</SidebarLink>
                <SidebarLink to="/">Uramaki</SidebarLink>
                <SidebarLink to="/">Hosomaki</SidebarLink>
                <SidebarLink to="/">Bevande</SidebarLink>
                <SidebarLink to="/">Birre</SidebarLink>
                <SidebarLink to="/">Kit Cocktails</SidebarLink>
                <SidebarLink to="/">Superalcolici</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Ordina adesso</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar