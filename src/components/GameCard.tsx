import React from 'react'
import { Game } from '../hooks/useGame'
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
interface Props{
    games: Game
}

const GameCard = ({games}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={games.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>
                {games.name}
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard