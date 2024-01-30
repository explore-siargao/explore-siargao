import React from 'react'
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/new/select"
import { COUNTRIES } from '@repo/constants'

export interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}

const SelectCountry = (props: SelectProps) => {
  return (
    <Select {...props}>
      <SelectTrigger label="Country">
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>
      <SelectContent>
        {COUNTRIES.map((country) => <SelectItem value={country.code}>{country.name}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}

export default SelectCountry