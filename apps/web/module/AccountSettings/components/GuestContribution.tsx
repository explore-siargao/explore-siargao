"use client"
import { Title } from "@/common/components/ui/Title"
import combineClasses from "@/common/helpers/combineClasses"
import { Switch } from "@headlessui/react"
import React, { useState } from "react"

const GuestContribution = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="my-5">
      <Title size={"sub"}>Guest contributions</Title>
      <p className="font-light pb-4">
        To show their appreciation for great hospitality, guests can send an
        optional financial contribution to a host after completing a stay or an
        ExploreSiargao Experience. You can choose to automatically allow or
        decline future contributions from guests.
      </p>
      <div className="flex justify-between border-b border-b-text-100 py-5">
        <label htmlFor="switchToggle" className="w-full">
          Allow contribution
        </label>
        <Switch
          id="switchToggle"
          checked={enabled}
          onChange={setEnabled}
          className={combineClasses(
            enabled ? "bg-text-600" : "bg-text-200",
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-text-600 focus:ring-offset-2"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={combineClasses(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
      </div>
      <p className="font-light mt-10">
        100% of all contributions will be deposited into your payout account,
        unless you have an account balance. Your payout is subject to the
        <a href="/" className="font-semibold">Payment Terms of Service.</a>
        Please note that contributions may not be tax deductible or eligible for
        tax credits
      </p>
    </div>
  )
}

export default GuestContribution
