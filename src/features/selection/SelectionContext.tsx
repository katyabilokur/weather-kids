import { ReactNode, createContext, useContext, useReducer } from "react";
import Coordinates from "../../interfaces/Coordinates";

interface ProviderProps {
  children?: ReactNode;
}
interface SelectionContextValue {
  location: string;
  coordinates: Coordinates | null;
  gender: boolean | null;
  date: Date | null;
  setCooordinates: (value: Coordinates) => void;
  setLocation: (value: string) => void;
  setDate: (value: Date) => void;
  setGender: (value: boolean) => void;
}

const inicialState = {
  location: "",
  coordinates: null,
  gender: null,
  date: null,
  setCooordinates: () => {},
  setLocation: () => {},
  setDate: () => {},
  setGender: () => {},
};

interface ActionReducerType {
  type: string;
  payload: any;
}

const SelectionContext = createContext<SelectionContextValue>(inicialState);

function SelectionProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, inicialState);

  function setCooordinates(value: Coordinates) {
    dispatch({
      type: "NEW_COORDINATES",
      payload: value,
    });
  }

  function setLocation(value: string) {
    dispatch({
      type: "NEW_LOCATION",
      payload: value,
    });
  }

  function setDate(value: Date) {
    dispatch({
      type: "SET_DATE",
      payload: value,
    });
  }

  function setGender(value: boolean) {
    dispatch({
      type: "SET_GENDER",
      payload: value,
    });
  }

  function reducer(state: SelectionContextValue, action: ActionReducerType) {
    switch (action.type) {
      case "NEW_LOCATION":
        return { ...state, location: action.payload };
      case "NEW_COORDINATES":
        return { ...state, coordinates: action.payload };
      case "SET_GENDER":
        return { ...state, gender: action.payload };
      case "SET_DATE":
        return { ...state, date: action.payload };
      default:
        return state;
    }
  }

  const value = {
    location: state.location,
    coordinates: state.coordinates,
    gender: state.gender,
    date: state.date,
    setCooordinates,
    setLocation,
    setDate,
    setGender,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

function useSelection() {
  const context = useContext(SelectionContext);
  if (context === undefined)
    throw new Error("SelectionContext is used outside where it should be");
  return context;
}

export { SelectionProvider, useSelection };
