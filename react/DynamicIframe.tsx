import Iframe from './Iframe'
import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

const DynamicIframe: StorefrontFunctionComponent<DynamicIframeProps> = ({
  srcPrepend,
  dynamicParams,
  srcAppend,
  width,
  height,
  title,
}) => {
  const {
    route: { params },
  } = useRuntime()
  let dynamicSrcValues = ''
  if (dynamicParams && dynamicParams.length) {
    dynamicParams.forEach(thisValue => {
      if (params[thisValue]) {
        dynamicSrcValues += '/' + params[thisValue]
      }
    })
  }
  const newSrc =
    srcPrepend +
    dynamicSrcValues +
    (srcAppend && srcAppend != '' ? '/' + srcAppend : '')
  return <Iframe title={title} src={newSrc} width={width} height={height} />
}

interface DynamicIframeProps {
  srcPrepend?: string
  dynamicParams?: string[]
  srcAppend?: string
  width?: number
  height?: number
  title?: string
}

DynamicIframe.schema = {
  title: 'editor.dynamiciframe.title',
  type: 'object',
  properties: {
    srcPrepend: {
      title: 'editor.dynamiciframe.srcPrepend.title',
      description: 'editor.dynamiciframe.srcPrepend.description',
      type: 'string',
      default: null,
    },
    srcAppend: {
      title: 'editor.dynamiciframe.srcAppend.title',
      description: 'editor.dynamiciframe.srcAppend.description',
      type: 'string',
      default: null,
    },
    width: {
      title: 'editor.dynamiciframe.width.title',
      type: 'number',
      default: null,
    },
    height: {
      title: 'editor.dynamiciframe.height.title',
      type: 'number',
      default: null,
    },
    title: {
      title: 'editor.dynamiciframe.title.title',
      type: 'string',
      default: null,
    },
  },
}

export default DynamicIframe
