import { addDecorator } from '@storybook/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'
import Center from '../src/components/center/center'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Storybook version 6 decorator
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Box m={'4'}>
        <Story />
      </Box>
    </ThemeProvider>
  )
]

// Storybook version 5 decorator
// addDecorator(story => 
// (<ThemeProvider theme={theme}>
//   <CSSReset />
//   <Box m={'4'}>
//     {story()}
//   </Box>
// </ThemeProvider>)
// // {/* <Center>{story()}</Center> */}
// )
