import React from 'react'
import 'styles/components/ProjectItem.scss'
import { Tag } from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface ProjectItemProps {
  contentLeft: React.ReactNode,
  children: React.ReactNode,
  tags: Array<string>,
  status: "default" | "lowOpacity",
  title: string,
  link: string,
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  contentLeft,
  children,
  tags,
  status,
  title,
  link
}) => {
  return (
    <div className={`project-item ${status}`} onClick={
      () => {
        window.open(link, "_blank");
      }
    }>
      <div className="first-column">
        {contentLeft}
      </div>
      <div className="content-column">
        <h3>{title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
        {children}
        <div className="tags">
          {
            tags.map((tag, index) => {
              return (
                <Tag key={index}>{tag}</Tag>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
