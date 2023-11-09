//@ts-nocheck
import React from "react";

export default function HeaderMenu({ title }) {
  return (
    <>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary">{title}</h3>
      </div>
    </>
  );
}
