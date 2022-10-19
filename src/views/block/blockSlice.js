import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { COLOR_WHITE } from "constants/constants";
import {
  fillBlock,
  generateBlockData,
  getAndSetNextColor,
  getRowAndColBlockRange,
  isValidStartBlock,
} from "./helpers/helper";

const initialState = {
  data: generateBlockData(),
  isMouseDown: false,
  startBlock: "",
  color: COLOR_WHITE,
  loading: false,
};

// ------------
// Slice
// ------------
export const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    setMouseDown: (state, action) => {
      state.isMouseDown = action.payload.mouseDown;
      state.startBlock = action.payload.start;

      // Get next color
      let nextColor = getAndSetNextColor(action.payload.start, state.data);

      if (nextColor == null) return;

      state.color = nextColor;
      console.log(nextColor);
    },
    fillBlockElement: (state, action) => {
      if (!isValidStartBlock(state.startBlock)) return;

      //console.log(`${state.startBlock} - ${action.payload.end}`);

      let selectionPoints = getRowAndColBlockRange(
        state.startBlock,
        action.payload.end
      );

      fillBlock(selectionPoints, state.data, state.color);
    },
    cleanup: (state) => {
      state.data = generateBlockData();
      state.isMouseDown = false;
      state.startBlock = "";
      state.color = COLOR_WHITE;
      state.loading = false;
    },
  },
});

export const { setMouseDown, fillBlockElement, cleanup } = blockSlice.actions;

export default blockSlice.reducer;

// ------------
// Selectors
// ------------
const selectSelf = (state) => state.block;

export const selectBlock = createDraftSafeSelector(
  selectSelf,
  (state) => state
);
