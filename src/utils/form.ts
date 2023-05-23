import { z } from "zod";

export const OptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export type Option = z.infer<typeof OptionSchema>;

export const getOptionsFromRecord = (
  record: Record<string, string>
): Option[] =>
  Object.entries(record).map(([, value]) => ({
    value: value,
    label: value,
  }));
