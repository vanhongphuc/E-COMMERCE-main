import React, { memo } from "react";
import { navigation } from '../../ultils/contants'
import { NavLink } from 'react-router-dom'

// const notActivedStyle = ''
// const activedStyle = ''

const Navigation = () => {
    return (
        <div className="w-main h-[48px] py-2 border-y text-sm flex items-center">
            {navigation.map(el => (
                <NavLink
                    to={el.path}
                    key={el.id}
                    className={({ isActive }) => isActive ? 'pr-12 hover:text-main text-main' : 'pr-12 hover:text-main flex items-center gap-1'}>
                    {el?.icon}
                    {el.value}
                </NavLink>
            ))}
        </div>

    )
}
export default memo(Navigation)