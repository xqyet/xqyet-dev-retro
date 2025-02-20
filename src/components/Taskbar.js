import React, { useContext } from 'react'
import DataContext from '../contexts/dataContext'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

function Taskbar() {
    const { react95Repo } = useContext(DataContext).getProjectInfo(); // Only keeping React95 repo
    const projectRepo = "https://github.com/xqyet/gbucci-dev-retro"; // Updated Repo link

    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="brush">
                        <Link href={react95Repo} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="folder_file">
                        <Link href={projectRepo} target="_blank">Repo</Link>
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar;
