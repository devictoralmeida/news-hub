import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import DashboardModal from './DashboardModal/DashboardModal'
import DashboardList from './DashboardList/DashboardList'
import { StyledLoaderContainer } from '../../styles/grid'
import { StyledButton } from '../../styles/button'
import {
  StyledContainerToDashboard,
  StyledDashboardMain,
} from './DashboardPage.styles'
import { StyledHeadline1, StyledHeadline2 } from '../../styles/typography'
import { useContext, useEffect, useState } from 'react'
import { PostsContext } from '../../providers/PostsContext/PostsContext'
import { BounceLoader } from 'react-spinners'
import plus from '../../assets/plus.png'
import { useUserContext } from '../../hooks/useUserContext'

const DashboardPage = () => {
  const { user } = useUserContext()
  const { userPostList, setModalOpen, modalOpen, getUserPostsList } =
    useContext(PostsContext)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadUserPostsList = async () => {
      await getUserPostsList(setLoading)
    }

    if (!userPostList) {
      loadUserPostsList()
    }
  }, [])

  useEffect(() => {
    if (user) {
      document.title = `Kenzie Feed - Dashboard - ${user.name}`
    }
  }, [])

  return (
    <>
      {modalOpen ? <DashboardModal /> : null}
      <Header />
      <StyledDashboardMain>
        <StyledContainerToDashboard>
          {loading ? (
            <StyledLoaderContainer>
              <BounceLoader color="#55A3FF" size={30} />
            </StyledLoaderContainer>
          ) : (
            <>
              <div className="ContainerNewPost">
                <StyledHeadline1 fontSize="medium">
                  Suas publicações
                </StyledHeadline1>
                <StyledButton
                  ButtonSize="medium"
                  ButtonStyle="solid"
                  onClick={() => setModalOpen(true)}
                >
                  <img src={plus} alt="plus" />
                  Novo post
                </StyledButton>
              </div>
              {userPostList && userPostList.length >= 1 ? (
                <DashboardList />
              ) : (
                <StyledHeadline2 fontSize="small">
                  Você ainda não tem nenhuma notícia
                </StyledHeadline2>
              )}
            </>
          )}
        </StyledContainerToDashboard>
      </StyledDashboardMain>
      <Footer />
    </>
  )
}

export default DashboardPage
