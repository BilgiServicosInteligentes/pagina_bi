'use client'

import styled, { css } from 'styled-components'

interface ContainerProps {
  isMobile?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${props => css`
    z-index: 1;
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: row;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/img/background.jpg');
    justify-content: space-between;

    .logo {
      padding: 30px;

      .logo-image {
        width: 133px;
        height: auto;
      }
    }

    /* .Organo {
      width: 100%;
      height: 600px;
      display: flex;
      border-radius: 50px;
      align-items: center;
      justify-content: center;

      .img {
        width: 100%;
        height: 100%;
      }
    } */
    .button {
      display: flex;
    }
    ${props.isMobile && css``}
  `}
  .button {
    padding-bottom: 30px;
  }
  .menu-bar {
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  z-index: 2;
  display: flex;
  min-width: 70px;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #80162a;
  background-position: center;
  justify-content: space-between;
  transition: min-width 0.3s ease;
  border-radius: 0px 20px 20px 0px;
  background-image: url('/img/materialbilgi.png');

  &:hover {
    min-width: 400px;
  }

  .sidebar-content {
    gap: 40px;
    padding: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  #side_items {
    gap: 8px;
    display: flex;
    list-style: none;
    flex-direction: column;
  }
  .side-item {
    padding: 14px;
    cursor: pointer;
    border-radius: 8px;
  }
  .side-item.active {
    background-color: #4f46e5;
  }

  .side-item:hover:not(.active),
  #logout_btn:hover {
    background-color: #fab6c3;
  }

  .side-item a {
    color: #ffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
  }
  &:hover a {
    gap: 50px;
  }

  .item-description {
    width: 0px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: width 0.3s ease;
  }

  &:hover .item-description {
    width: 150px;
    overflow: visible;
  }

  #logout {
    padding: 12px;
  }
  #logout_btn {
    color: #fff;
    border: none;
    padding: 12px;
    display: flex;
    font-size: 14px;
    cursor: pointer;
    text-align: start;
    border-radius: 8px;
    align-items: center;
    background-color: transparent;
  }
  &:hover #logout_btn {
    gap: 50px;
  }
`
