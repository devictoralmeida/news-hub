import ListCard from './ListCard/ListCard'
import { StyledList } from './DashboardList.styles'
import { PostsContext } from '../../../providers/PostsContext/PostsContext'
import { useContext } from 'react'
import { produce } from 'immer'
import { INews } from '../../../providers/NewsContext/@types'

const DashboardList = () => {
  const { userPostList } = useContext(PostsContext)
  let atualizedPostList

  if (userPostList) {
    atualizedPostList = produce(userPostList, (draft: INews[]) => {
      draft.reverse()
    })

    return (
      <StyledList>
        {atualizedPostList.map((postInList: INews) => (
          <ListCard key={postInList.id} postInList={postInList} />
        ))}
      </StyledList>
    )
  }
}
export default DashboardList
