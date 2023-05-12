/* eslint-disable no-console */
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container'] as const

interface Props {
  src?: string
  width?: number
  height?: number
  allow?: string
  title?: string
  id?: string
  className?: string
  onLoad?: any
}

function Iframe(props: Props) {
  const { src, width, height, title, allow, id, className, onLoad } = props
  const handles = useCssHandles(CSS_HANDLES)

  const handleIframeLoad = () => {
    // eslint-disable-next-line vtex/prefer-early-return
    if (onLoad) {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
      return Function('IframeHandler', `"use strict";(${onLoad});`)(onLoad)
    }
    return null
  }

  return (
    <div className={`${handles.container} w-100 flex justify-center`}>
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        allow={allow}
        id={id}
        className={className}
        onLoad={handleIframeLoad}
        frameBorder="0"
      />
    </div>
  )
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
    id: {
      title: 'editor.iframe.id.title',
      type: 'string',
      default: null,
    },
    className: {
      title: 'editor.iframe.className.title',
      type: 'string',
      default: null,
    },
    onLoad: {
      title: 'editor.iframe.onLoad.title',
      type: 'string',
      default: null,
    },
    allow: {
      title: 'editor.iframe.allow.title',
      type: 'string',
      default: null,
    },
  },
}

export default Iframe
