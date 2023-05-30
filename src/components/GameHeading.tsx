import { Heading } from '@chakra-ui/react'
import { GameQuary } from '../App'

interface Props{
    gameQuary: GameQuary
}
const GameHeading = ({gameQuary}: Props) => {
    const heading = `${gameQuary.platform?.name || ''} ${gameQuary.genre?.name || ''} Games`
  return (
    <Heading marginY={5} as="h1">{heading}</Heading>
  )
}

export default GameHeading