import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import PoemsContext from "../utils/PoemsContext"

function OneStar(props) {
  const { fill, setFill, starNumber, poemId } = props
  const { addRating } = useContext(PoemsContext)
  return fill >= starNumber ? (
    <AiFillStar size="25" onMouseOver={() => setFill(starNumber)} onClick={() => addRating(poemId, starNumber)} />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
