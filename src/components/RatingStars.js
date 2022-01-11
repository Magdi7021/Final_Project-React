import { useState } from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai"
import OneStar from "./OneStar"

function RatingStars(props) {
  const { poemId } = props
  const [show, setShow] = useState(false)
  const [fill, setFill] = useState(0)
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip>
          <div style={{ padding: 15 }} onMouseLeave={() => setFill(0)}>
            <OneStar fill={fill} setFill={setFill} starNumber={1} poemId={poemId} />
            <OneStar fill={fill} setFill={setFill} starNumber={2} poemId={poemId} />
            <OneStar fill={fill} setFill={setFill} starNumber={3} poemId={poemId} />
            <OneStar fill={fill} setFill={setFill} starNumber={4} poemId={poemId} />
            <OneStar fill={fill} setFill={setFill} starNumber={5} poemId={poemId} />
          </div>
        </Tooltip>
      }
      show={show}
    >
      <Button variant="dark" onClick={() => setShow(!show)}>
        <AiFillStar />
      </Button>
    </OverlayTrigger>
  )
}

export default RatingStars
