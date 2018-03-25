# placed
an app that helps users learn table placing etiquette - because why not.

## Built With
- React
- Redux

## State
- Persistent State: `setting_legend`, `setting_order`, `setting_types`
  - These are all reference arrays or objects that allow us to sort and show the proper order and items a user selects
- Local UI State:
  - within `PlaceSettings`:
    - `error` is set to true if one of the api requests comes back with an error, preserves DOM.
    - `current_setting` is decided on button click, renders the requested place setting
- Client State:
  - TBD
    

### References
http://emilypost.com/advice/table-setting-guides/
