export interface Loader {
  loadDir<T>(
    path: string,
    deps: any,
    suffix?: string,
  ): Promise<Record<string, T>>;
}
