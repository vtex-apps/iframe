import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container'] as const

const Iframe: StorefrontFunctionComponent<IframeProps> = ({
  src,
  width,
  height,
  title,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.container} w-100 flex justify-center`}>
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        frameBorder="0"
      />
    </div>
  )
}

interface IframeProps {
  src?: string
  width?: number
  height?: number
  title?: string
}

Iframe.schema = {
  title: 'editor.iframe.title',
  type: 'object',
  properties: {
    src: {
      title: 'editor.iframe.src.title',
      description: 'editor.iframe.src.description',
      type: 'string',
      default: null,
    },
    width: {
      title: 'editor.iframe.width.title',
      type: 'number',
      default: null,
    },
    height: {
      title: 'editor.iframe.height.title',
      type: 'number',
      default: null,
    },
    title: {
      title: 'editor.iframe.title.title',
      type: 'string',
      default: null,
    },
  },
}

export default Iframe
