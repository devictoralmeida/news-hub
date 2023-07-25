import { useContext } from 'react'
import trash from '../../../../assets/trash.svg'
import pen from '../../../../assets/pen.svg'
import { StyledHeadline3 } from '../../../../styles/typography'
import { StyledCard } from './ListCard.styles'
import { PostsContext } from '../../../../providers/PostsContext/PostsContext'
import { useNavigate } from 'react-router-dom'
import { INews } from '../../../../providers/NewsContext/@types'

interface IListCardProps {
  postInList: INews
}

const ListCard = ({ postInList }: IListCardProps) => {
  const { handleDelete } = useContext(PostsContext)

  const navigate = useNavigate()

  return (
    <StyledCard>
      <img className="postImage" src={postInList.image} alt="Imagem do post" />
      <div className="titleAndIcons">
        <StyledHeadline3 fontSize="small">{postInList.title}</StyledHeadline3>
        <div className="container__icons-trash-pen">
          <img
            src={pen}
            alt=""
            onClick={() => navigate(`/dashboard/edit-news/${postInList.id}`)}
          />
          <img onClick={() => handleDelete(postInList.id)} src={trash} alt="" />
        </div>
      </div>
    </StyledCard>
  )
}

export default ListCard
