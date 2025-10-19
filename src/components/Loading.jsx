import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl text-slate-200 font-medium">
          Loading UPI QR Generator...
        </h2>
      </div>
    </div>
  );
}
