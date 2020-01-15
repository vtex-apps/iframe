import Iframe from './Iframe'
import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

const DynamicIframe: StorefrontFunctionComponent<DynamicIframeProps> = ({
  dynamicSrc,
  width,
  height,
  title,
}) => {
  const {
    route: { params },
  } = useRuntime()
  if (dynamicSrc && dynamicSrc.length) {
    dynamicSrc.split('/').forEach(thisValue => {
      if (thisValue.indexOf('{') >= 0) {
        dynamicSrc = dynamicSrc.replace(/({[A-z0-1]*})/g, function(match) {
          var thisParam = match.replace(/{|}/g, '')
          return params[thisParam]
        })
      }
    })
  }
  return <Iframe title={title} src={dynamicSrc} width={width} height={height} />
}

interface DynamicIframeProps {
  dynamicSrc: string
  width?: number
  height?: number
  title?: string
}

DynamicIframe.schema = {
  title: 'editor.dynamiciframe.title',
  type: 'object',
  properties: {
    dynamicSrc: {
      title: 'editor.dynamiciframe.dynamicSrc.title',
      description: 'editor.dynamiciframe.dynamicSrc.description',
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
