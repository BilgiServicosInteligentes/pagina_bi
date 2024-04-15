import styled from 'styled-components'

interface Props {
  isVisible: boolean
}

export const MenuStyle = styled.div<Props>`
  gap: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;

  .content-side {
    gap: 20px;
    display: flex;
    width: 608px;
    height: 1018px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .usuario,
  .bi,
  .bpm,
  .treinamento,
  .po,
  .it,
  .faq,
  .upload {
    width: 210px;
    height: 170px;
    display: flex;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #80162a;

    &:hover {
      background-color: #fab6c3;
      color: #000;
    }
  }

  .content {
    gap: 20px;
    display: flex;
    flex-direction: row;
  }

  .size-icon {
    width: 50px;
    height: 50px;
  }

  #items {
    max-width: 250px;
    max-height: 221px;
  }

  #logout_btn:hover {
    background-color: #fab6c3;
    color: #000;
  }

  .item a {
    gap: 50px;
    width: 100%;
    color: #ffff;
    display: flex;
    font-size: 20px;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    justify-content: center;

    &:hover {
      background-color: #fab6c3;
    }
  }

  #logout {
    width: 100%;
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;
  }
  #logout_btn {
    gap: 10px;
    color: #fff;
    border: none;
    width: 80px;
    height: 70px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    background-color: #80162a;
  }
  .icon {
    width: 35px;
    height: 35px;
  }

  .logo {
    width: 100%;

    .logo-image {
      width: 90px;
    }
  }

  @media (max-width: 660px) {
    gap: 70px;
    width: 100%;
    height: 100vh;

    .usuario,
    .bi,
    .bpm,
    .treinamento,
    .po,
    .it,
    .faq,
    .upload {
      display: flex;
      max-width: 150px;
      max-height: 100px;
      border-radius: 15px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #80162a;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      .logo-image {
        width: 100px;
      }
    }

    #logout {
      width: 100%;
      display: flex;
      padding-right: 20px;
      justify-content: flex-end;
    }

    .item a {
      gap: 15px;
      font-size: 15px;
    }
  }

  @media (max-width: 768px) and (max-height: 700px) {
    gap: 15px;
    width: 100%;
    height: 100vh;

    .usuario,
    .bi,
    .bpm,
    .treinamento,
    .po,
    .it,
    .faq,
    .upload {
      display: flex;
      max-width: 150px;
      border-radius: 15px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #80162a;
    }
    .logo {
      max-width: 100%;
      max-height: 100%;
      justify-content: center;

      .logo-image {
        max-width: 100px;
      }
    }

    #logout {
      max-width: 100%;
      display: flex;
      padding-right: 20px;
      justify-content: flex-end;
    }
    #logout_btn {
      width: 50px;
      height: 50px;
    }

    .item a {
      gap: 12px;
    }
    .content-side {
      gap: 15px;
    }
  }
`
