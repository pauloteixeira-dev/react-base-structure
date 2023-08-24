import React from 'react'
import { Checkbox } from 'antd'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box, Flex } from 'components/Shared/Flex'
import { Container } from '../Form/styles'
import { StyledCheckbox } from '../Form/CustomCheckbox/styles'

interface Props {
  mt?: string;
  label?: string;
  isRequired?: boolean;
  onChange?: (event: any) => void;
  checked?: boolean;
}

const CustomCheckboxWithoutForm: React.FC<Props> = ({
  mt = '16px',
  label,
  isRequired,
  onChange,
  checked,
}) => (
  <Box mt={mt}>
    <Container>
      <Flex>
        <CustomLabel text={label} isRequired={isRequired} />
        <StyledCheckbox>
          <Checkbox
            onChange={onChange}
            checked={checked}
          />
        </StyledCheckbox>
      </Flex>
    </Container>
  </Box>
)

export default CustomCheckboxWithoutForm
