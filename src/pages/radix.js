// import Grid from '@radix-ui/'

import '@radix-ui/themes/styles.css';
import { Theme, Grid, Box, DecorativeBox, Text, Button, Flex } from '@radix-ui/themes';
import * as React from "react"

const RadixPage = () => (
  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <Grid columns="3" gap="3" width="auto">
      <Box height="9">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
      </Box>
      <Box height="9">
        some
      </Box>
      <Box height="9">
        some
      </Box>
    </Grid>
  </Theme>
)

export default RadixPage

const some = () => (
  <div>some</div>
)
// export default some