import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from './styles-utils'

const sun = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
  >
    <title>sun-fill</title>
    <path
      fill={colors.DAY_ICON}
      d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"
    ></path>
  </svg>
)

const moon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
  >
    <title>moon-fill</title>
    <path
      fill={colors.NIGHT_ICON}
      d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"
    ></path>
  </svg>
)

const ID = 'toggle-switch'

const Label = styled.label({
  fontSize: 16,
  lineHeight: '19.2px',
  fontWeight: 900,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
})

const Input = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
})

const Switch = styled.div({
  position: 'relative',
  display: 'inline-block',
  width: 58,
  height: 29,
  marginLeft: 10,
})

const Slider = styled.span(
  {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 34,
  },
  ({ isDark }) => {
    return {
      backgroundColor: isDark ? colors.NIGHT_BG : colors.DAY_BG,
    }
  }
)

const SliderBall = styled.span(
  {
    position: 'absolute',
    height: 22,
    width: 22,
    left: 4,
    bottom: 4,
    backgroundColor: 'white',
    transition: '.4s',
    borderRadius: 36,
    cursor: 'pointer',
  },
  ({ isDark }) => ({ transform: isDark ? 'translateX(27px)' : null })
)

const SunWrapper = styled.span(
  {
    position: 'absolute',
    height: 16,
    width: 16,
    right: 6,
    top: 6,
    cursor: 'pointer',
  },
  ({ isDark }) => {
    if (isDark) return { display: 'none' }
  }
)

const MoonWrapper = styled.span(
  {
    position: 'absolute',
    height: 16,
    width: 16,
    top: 6,
    left: 6,
    cursor: 'pointer',
  },
  ({ isDark }) => {
    if (!isDark) return { display: 'none' }
  }
)

const ToggleSwitch = () => {
  const [isDark, setDark] = useState(false)

  return (
    <div>
      <Label htmlFor={ID}>
        Dark Mode
        <Switch>
          <Input
            id={ID}
            type="checkbox"
            checked={isDark}
            onChange={() => setDark(!isDark)}
          />
          <Slider isDark={isDark} />
          <SliderBall isDark={isDark} />
          <SunWrapper isDark={isDark}>{sun}</SunWrapper>
          <MoonWrapper isDark={isDark}>{moon}</MoonWrapper>
        </Switch>
      </Label>
    </div>
  )
}

export default ToggleSwitch
