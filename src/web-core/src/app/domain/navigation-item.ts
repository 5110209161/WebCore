/**
 * Object describes items of navigation
 */
export interface NavigationItem {
  label: string;
  value: string;
  isSubItem?: boolean; // if set to true, this item will be displayed as sub item of the former one
  items?: NavigationItem[];
}