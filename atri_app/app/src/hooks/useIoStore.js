import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Blog": {},
  "Projects": {}
}});

export default useIoStore;
