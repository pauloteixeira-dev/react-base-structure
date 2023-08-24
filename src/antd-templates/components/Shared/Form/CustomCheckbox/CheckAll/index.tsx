import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import CustomCheckboxWithoutForm from '../../../CustomCheckBox'

interface Props {
  label?: string;
  watchFieldName: string;
  itemCheckPropName: string;
}

const CheckAllCheckbox = ({ label, watchFieldName, itemCheckPropName }: Props) => {
  const [isAllChecked, setIsAllChecked] = useState(false)
  const { watch, getValues, setValue } = useFormContext()

  const itemsWatcher = watch(watchFieldName)
  useEffect(() => {
    const isAllItemsChecked = itemsWatcher.every((item: any) => item[itemCheckPropName])
    setIsAllChecked(!!isAllItemsChecked)
  }, [itemCheckPropName, itemsWatcher])

  const handleCheckAllItems = (setAllNewVal: boolean) => {
    const ItemListValues = getValues(watchFieldName)
    const ItemListNewValues = ItemListValues.map((item: any) => ({
      ...item,
      [itemCheckPropName]: setAllNewVal
    }))
    setValue(watchFieldName, ItemListNewValues)
  }

  return (
    <CustomCheckboxWithoutForm
      label={label}
      onChange={ev => handleCheckAllItems(ev.target.checked)}
      checked={isAllChecked}
    />
  )
}

export default CheckAllCheckbox
