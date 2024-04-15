'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-repeat: no-repeat;
  background-image: url('img/backgroundlogin.jpg');

  .content {
    height: 570px;
    display: flex;
    max-width: 1000px;
    border-radius: 10px;
    background-color: #fff;
  }
  .login {
    font-size: 25px;
    font-weight: 800;
  }
  .image-logo {
    width: 50%;
    display: flex;
    align-items: center;
    background-size: cover;
    justify-content: center;
    background-repeat: no-repeat;
    border-radius: 8px 0px 0px 8px;
    background-image: url('img/backgroundlogin.jpg');

    .logo {
      height: auto;
      max-width: 500px;
    }
  }
  .form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-form {
    gap: 30px;
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .campo-form {
    display: flex;
    gap: 30px;
  }
  .senha {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1035px) {
    width: 100%;

    .content {
      height: 570px;
      max-width: 1000px;
    }

    .content-form {
      width: 200px;
    }

    .image-logo {
      width: 50%;

      .logo {
        height: auto;
        max-width: 500px;
      }
    }
    .subtitle {
      font-size: 15px;
    }
    .form {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 350px;
      height: 520px;
    }
    .image-logo {
      display: none;
    }
    .form {
      width: 100%;
    }
    .subtitle {
      font-size: 15px;
    }

    .containerform {
      max-width: 320px;
    }
    .buttoncontent {
      width: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .senha {
      display: flex;
      justify-content: center;
    }
  }
`
