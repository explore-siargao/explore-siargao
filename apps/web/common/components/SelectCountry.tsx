import React from 'react'
import {
  Select,
  Option
} from "@/common/components/ui/Select"
import { COUNTRIES } from '@repo/constants'
import { UseFormRegister, FieldValues } from 'react-hook-form'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> { 
    register: UseFormRegister<FieldValues>
  }

const SelectCountry = (props: SelectProps) => {
  return (
    <Select {...props} {...props.register("country")} label="Country">
      <Option value="">
        Select Country
      </Option>
      {COUNTRIES.map((country) => <Option value={country.code}>{country.name}</Option>)}
    </Select>
  )
}

export default SelectCountry