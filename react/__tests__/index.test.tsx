import React from 'react'
import { render } from '@vtex/test-tools/react'
import DynamicIframe from '../DynamicIframe'
import { useRuntime } from 'vtex.render-runtime'

const mockedUseRuntime = useRuntime as jest.Mock

describe('DynamicIframe', () => {
  it('should render the right URL', () => {
    mockedUseRuntime.mockImplementation(() => {
      return {
        route: {
          params: {
            param1: 'foo',
            param2: 'bar',
          },
        },
      }
    })

    const { container } = render(
      <DynamicIframe dynamicSrc="https://{param1}.com/{param2}.aspx" />
    )

    const iframe = container.querySelector('iframe') as HTMLIFrameElement

    expect(iframe.src).toBe('https://foo.com/bar.aspx')
  })
})
