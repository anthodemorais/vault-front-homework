import * as React from 'react'
import styled from 'styled-components'

type CoinUnitProps = {
  unit: string
}

const CoinUnit = ({ unit }: CoinUnitProps) => {
  return (
    <StyledCoinUnit>
      {' '}
      {unit}
      <StyledImg
        src={`https://cryptoicons.org/api/color/${unit.toLowerCase()}/20`}
        alt={unit}
      />
    </StyledCoinUnit>
  )
}

const StyledCoinUnit = styled.span`
  display: flex;
  align-items: center;
  margin-left: 4px;
  margin-right: 4px;
`

const StyledImg = styled.img`
  margin-left: 4px;
`

export default CoinUnit
