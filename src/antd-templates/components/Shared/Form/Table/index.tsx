import React, { useCallback, useState } from 'react'
import {
  ColumnsType, TablePaginationConfig,
} from 'antd/lib/table/interface'
import { TColumns } from 'types/types'
import { Table as AntTable } from 'antd'
import { Box, Flex } from 'components/Shared/Flex'
import { MdSearch } from 'react-icons/md'
import CustomInput from 'components/Shared/CustomInput'
import { debounce } from 'lodash'
import { CustomTd, CustomTh } from './styles'
import { PrimaryButton } from '../Button/PrimaryButton/styles'


type TProps ={
  columns: TColumns[] | ColumnsType<any>;
  data?: readonly any[];
  pagination?: false | TablePaginationConfig;
  onChangeTable?: (pagination: TablePaginationConfig, filters: any, sorter: any) => void
  onSearch?: (value: string) => void;
  searchPlaceholder?: string;
  disabledSearch?: boolean;
  createBtnLabel?: string;
  createBtnAction?: () => void;
}

const CustomBodyCellWrapper = (props: any) => {
  const { children } = props
  return (
    <CustomTd {...props}>
      {children}
    </CustomTd>
  )
}

const CustomHeaderCellWrapper = (props: any) => {
  const { children } = props
  return (
    <CustomTh {...props}>
      {children}
    </CustomTh>
  )
}

const Table = ({
  columns,
  data,
  pagination,
  onChangeTable,
  onSearch,
  searchPlaceholder,
  disabledSearch,
  createBtnLabel,
  createBtnAction,
}:TProps) => {
  const [search, setSearch] = useState<string>('')
  const customComponents = {
    header: {
      cell: CustomHeaderCellWrapper,
    },
    body: {
      cell: CustomBodyCellWrapper,
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(
    debounce((value: string) => (
      onSearch && onSearch(value)
    ), 1000),
    [],
  )

  const handleSearch = (value:string) => {
    setSearch(value)
    onSearch && debouncedHandleSearch(value)
  }

  return (
    <>
      <Flex justifyContent='space-between'>
        { !disabledSearch && (
          <CustomInput
            type='text'
            handleChange={(event: any) => {
              handleSearch(event.target.value)
            }}
            value={search}
            placeholder={searchPlaceholder}
            suffix={<MdSearch />}
            style={{ minWidth: '30vw', maxWidth: '40vw' }}
          />
        )}
        {createBtnLabel && createBtnAction && (
          <Box mt='8px'>
            <PrimaryButton size='large' onClick={() => createBtnAction()}>
              {createBtnLabel}
            </PrimaryButton>
          </Box>
        )}
      </Flex>
      <AntTable
        columns={columns}
        components={customComponents}
        dataSource={data}
        // scroll={{ y: 345 }}
        size='small'
        pagination={pagination}
        onChange={onChangeTable}
        locale={{
          emptyText: 'Nenhum registro foi encontrado',
          cancelSort: '',
          triggerAsc: '',
          triggerDesc: '',
        }}
      />
    </>
  )
}

export default Table
