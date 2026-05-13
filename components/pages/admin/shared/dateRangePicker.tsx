"use client";

import { useState } from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

interface DateProps {
  is_oneDate?: boolean;
}

export function DateRangePicker({ is_oneDate }: DateProps) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  // Normalize today's date (remove time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return is_oneDate ? (
    <Field>
      <Label>Date</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start bg-transparent"
          >
            {startDate ? format(startDate, "yyyy-MM-dd") : "Pick date"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            className="h-72"
            selected={startDate}
            onSelect={(date) => {
              setStartDate(date);

              // Reset end date if it's invalid
              if (endDate && date && endDate < date) {
                setEndDate(undefined);
              }
            }}
            disabled={(date) => date > today}
          />
        </PopoverContent>
      </Popover>
    </Field>
  ) : (
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <Label>Start Date</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              {startDate ? format(startDate, "yyyy-MM-dd") : "Pick start date"}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              className="h-72"
              selected={startDate}
              onSelect={(date) => {
                setStartDate(date);

                // Reset end date if it's invalid
                if (endDate && date && endDate < date) {
                  setEndDate(undefined);
                }
              }}
              disabled={(date) => date > today}
            />
          </PopoverContent>
        </Popover>
      </Field>

      {/* End Date */}
      <Field>
        <Label>End Date</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              {endDate ? format(endDate, "yyyy-MM-dd") : "Pick end date"}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              className="h-72"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => {
                if (!startDate) return date < today;
                return date < startDate;
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
    </div>
  );
}
