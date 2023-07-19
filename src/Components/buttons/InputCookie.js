import React from "react";

export default function InputCookie() {
  return (
    <>
      <div className="space-x-5 pt-3 font-medium">
        <input type="checkbox" name="Functionele cookies" checked />
        <label htmlFor="Functionele cookies">Functionele cookies</label>
      </div>
      <div className="space-x-5 pt-3 font-medium">
        <input type="checkbox" name="Marketing cookies" checked />
        <label htmlFor="Marketing cookies">Marketing cookies</label>
      </div>
      <div className="space-x-5 pt-3 font-medium">
        <input type="checkbox" name="Statistieken cookies" checked />
        <label htmlFor="Statistieken cookies">Statistieken cookies</label>
      </div>
    </>
  );
}
