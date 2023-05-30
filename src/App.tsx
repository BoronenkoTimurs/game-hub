import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuary {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuary({ ...gameQuary, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuary.genre}
            onSelectGenre={(genre) => setGameQuary({ ...gameQuary, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuary={gameQuary} />
          <Flex marginBottom={5}>
            <Box marginRight={0}>
              {/* TODO: work with marginRight(have a bug) */}
              <PlatformSelector
                selectedPlatform={gameQuary.platform}
                onSelectPlatform={(platform) =>
                  setGameQuary({ ...gameQuary, platform })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuary.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuary({ ...gameQuary, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuary={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
