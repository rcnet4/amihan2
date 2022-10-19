import BlockItems from "components/features/block/BlockItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as BlockSlice from "./blockSlice";
import "./block-view.scss";

function BlockView() {
  const dispatch = useDispatch();
  const { data, isMouseDown } = useSelector(BlockSlice.selectBlock);

  const handleMouseDown = (e) => {
    e.preventDefault();

    if (e.target.id == null || e.target.id === "ROOT") return;

    dispatch(BlockSlice.setMouseDown({ mouseDown: true, start: e.target.id }));
  };

  const handleMouseUp = (e) => {
    dispatch(BlockSlice.setMouseDown(false));
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    //console.log(e.target.id);
    dispatch(BlockSlice.fillBlockElement({ end: e.target.id }));
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseDown]);

  useEffect(()=> {
    dispatch(BlockSlice.cleanup());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="block-view--wrapper">
      <span className="font-monospace fs-6 text-center">
        <b>SELECT AND DRAG</b>
      </span>
      <BlockItems data={data} />
    </div>
  );
}

export default BlockView;
