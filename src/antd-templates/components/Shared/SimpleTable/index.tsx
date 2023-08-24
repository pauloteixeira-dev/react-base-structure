import React, { ReactElement, useState } from 'react'
import { ColumnsType } from 'antd/lib/table/interface'
import { TColumns } from 'types/types'
import { Table as AntTable } from 'antd'
import { Box, Flex } from 'components/Shared/Flex'
import { MdSearch } from 'react-icons/md'
import CustomInput from '../CustomInput'

type TProps = {
  columns: TColumns[] | ColumnsType<any>
  data?: readonly any[]
  mt?: string
  rightElement?: ReactElement
  handleSearch?: (searchValue: string) => void
}

const SimpleTable = ({
  columns, data, mt = '16px', rightElement, handleSearch
}: TProps) => {
  const [search, setSearch] = useState('')
  return (
    <Flex justifyContent='space-between'>
      <Box mt={mt}>
        {(handleSearch || rightElement) && (
          <Flex justifyContent='space-between' alignItems='center'>
            <div>
              {handleSearch && (
                <CustomInput
                  type='text'
                  handleChange={(event: any) => {
                    setSearch(event.target.value)
                    handleSearch(event.target.value)
                  }}
                  value={search}
                  suffix={<MdSearch />}
                  style={{ minWidth: '30vw', maxWidth: '60vw' }}
                />
              )}
            </div>
            <Box mt='0px' mb='0px'>
              {rightElement}
            </Box>
          </Flex>
        )}
        <AntTable
          columns={columns}
          dataSource={data}
          pagination={false}
          size='small'
          locale={{
            emptyText: 'Nenhum registro foi encontrado',
            cancelSort: '',
            triggerAsc: '',
            triggerDesc: '',
          }}
        />
      </Box>
    </Flex>
  )
}

export default SimpleTable
