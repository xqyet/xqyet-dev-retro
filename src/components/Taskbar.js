import React, { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import { TaskBar, List } from '@react95/core';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

function Taskbar({ openApps, setOpenApps }) {
    const { react95Repo } = useContext(DataContext).getProjectInfo();
    const projectRepo = "https://github.com/xqyet/gbucci-dev-retro";

    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="brush">
                        <Link href={react95Repo} target="_blank">React95 Framework</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="folder_file">
                        <Link href={projectRepo} target="_blank">Repo</Link>
                    </List.Item>
                </List>
            }
            programs={
                Object.keys(openApps).map((app) => (
                    <List.Item key={app} className="pointer" icon="computer" onClick={() => setOpenApps(prev => ({ ...prev, [app]: !prev[app] }))}>
                        {app}
                    </List.Item>
                ))
            }
        />
    );
}

export default Taskbar;
