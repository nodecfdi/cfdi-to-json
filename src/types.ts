export interface SafeNestedRecord
  extends Record<string, string | undefined | SafeNestedRecord | SafeNestedRecord[]> {}
