import React from 'react'
import cx from 'classnames'
import s from "./{{pascalCase name}}.css";

interface {{pascalCase name}}Props {
  className?: string
}	

export const {{pascalCase name}} = ({className}: {{pascalCase name}}Props) => {
  return <div className={cx(s.root, className)}>test</div>
}