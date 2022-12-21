import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Header from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

it('<Header /> tests', () => {
  useRouter.mockImplementation()

  const {
    container
  } = render(<Header />)

  expect(container).toMatchSnapshot()
})