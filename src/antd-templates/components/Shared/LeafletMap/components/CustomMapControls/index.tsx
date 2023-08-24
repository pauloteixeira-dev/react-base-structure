import React, { useEffect } from 'react'
import { Select } from 'antd'
import { Flex } from 'components/Shared/Flex'
import { DefaultOptionType } from 'antd/lib/select'

type Props = {
  elementLayers: DefaultOptionType[] | undefined,
  selectedLayer: string | undefined,
  onLayerChange: (layer: string) => void
  baseLayers: DefaultOptionType[] | undefined,
  selectedBaseLayer: string | undefined,
  onBaseLayerChange: (layer: string) => void
  hideSingleElement?: boolean,
  hideBaseLayers?: boolean,
}

const CustomMapControls = ({
  elementLayers,
  selectedLayer,
  onLayerChange,
  baseLayers,
  selectedBaseLayer,
  onBaseLayerChange,
  hideSingleElement,
  hideBaseLayers,
}: Props) => {
  const shouldHideElements = !!(hideSingleElement && elementLayers && elementLayers.length === 1)

  useEffect(() => {
    if (shouldHideElements) {
      const selectedElementLayer = elementLayers && elementLayers[0].value
      if (selectedElementLayer !== null && selectedElementLayer !== undefined) {
        onLayerChange(selectedElementLayer.toString())
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideSingleElement, elementLayers])

  return (
    <Flex
      style={{
        position: 'absolute', top: 8, right: 8, zIndex: 401, gap: '8px'
      }}
    >
      {elementLayers && elementLayers.length > 0 && !shouldHideElements && (
        <Select
          allowClear
          placeholder='Selecione um elemento'
          options={elementLayers}
          value={selectedLayer}
          onChange={onLayerChange}
          size='small'
          style={{ minWidth: '100px' }}
        />
      )}
      {!hideBaseLayers && (
        <Select
          placeholder='Selecione uma camada base'
          options={baseLayers}
          value={selectedBaseLayer}
          onChange={onBaseLayerChange}
          size='small'
          style={{ minWidth: '100px' }}
        />
      )}
    </Flex>
  )
}

export default CustomMapControls
