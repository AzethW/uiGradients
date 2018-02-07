import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RotateIcon from './icons/rotate.svg'
import CodeIcon from './icons/code.svg'
import AddIcon from './icons/add.svg'
import DownloadIcon from './icons/download.svg'

const ActionbarContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const ActionItem = styled.li`
  margin: 0 10px;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  position: relative;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }

  &:last-child {
    margin-right: 0;
  }

  &:not(:first-child):before {
    content: "|";
    margin-left: 10px;
    position: absolute;
    left: -23px;
    top: 5px;
    color: #eaeaea;
  }
`

class Actionbar extends PureComponent {
  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyboardEvents.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyboardEvents.bind(this))
  }

  handleKeyboardEvents (event) {
    switch (event.keyCode) {
      case 38: // up
        this.props.handleGradientRotation('up')
        break
      case 40: // down
        this.props.handleGradientRotation('down')
        break
      default:
        break
    }
  }
  render () {
    return (
      <ActionbarContainer>
        <ActionItem onClick={ () => this.props.handleGradientRotation('up') }>
          <RotateIcon width='16' height='16' />
        </ActionItem>
        <ActionItem>
          <CodeIcon width='16' height='16' />
        </ActionItem>
        <ActionItem>
          <AddIcon width='16' height='16' />
        </ActionItem>
        <ActionItem>
          <DownloadIcon width='16' height='16' />
        </ActionItem>
      </ActionbarContainer>
    )
  }
}

Actionbar.propTypes = {
  handleGradientRotation: PropTypes.func.isRequired
}

export default Actionbar
